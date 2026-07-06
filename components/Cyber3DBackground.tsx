"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Point3D {
  x: number;
  y: number;
  z: number;
  ox: number; // original coordinates
  oy: number;
  oz: number;
}

export default function Cyber3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  // Mouse positions for parallax
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Initialize playback state from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("nolan_cyber_bg_animated");
    if (stored !== null) {
      setIsPlaying(stored === "true");
    }
  }, []);

  // Handle localStorage updates
  const togglePlay = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    localStorage.setItem("nolan_cyber_bg_animated", String(newState));
  };

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track window resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions to range [-1, 1]
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3D Grid Parameters
    const gridCols = 8;
    const gridRows = 8;
    const gridDepth = 3;
    const spacing = 180;
    const points: Point3D[] = [];

    // Generate grid points in 3D centered at (0, 0, 0)
    const startX = -((gridCols - 1) * spacing) / 2;
    const startY = -((gridRows - 1) * spacing) / 2;
    const startZ = -((gridDepth - 1) * spacing) / 2;

    for (let c = 0; c < gridCols; c++) {
      for (let r = 0; r < gridRows; r++) {
        for (let d = 0; d < gridDepth; d++) {
          const x = startX + c * spacing;
          const y = startY + r * spacing;
          const z = startZ + d * spacing;
          points.push({ x, y, z, ox: x, oy: y, oz: z });
        }
      }
    }

    // 3D rotation angles
    let angleX = 0.0003;
    let angleY = 0.0005;
    let rotX = 0.4; // initial tilt
    let rotY = 0.6; // initial turn

    const fov = 800; // perspective depth

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Base rotation when playing, stationary with mouse parallax when paused
      if (isPlaying) {
        rotX += angleX;
        rotY += angleY;
      }

      // Add mouse offsets for interactive depth
      const currentRotX = rotX + mouseRef.current.y * 0.15;
      const currentRotY = rotY + mouseRef.current.x * 0.15;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      // Project 3D points
      const projected: { x: number; y: number; depth: number; originalPoint: Point3D }[] = [];

      points.forEach((p) => {
        // Rotate Y-axis
        let x1 = p.ox * cosY - p.oz * sinY;
        let z1 = p.ox * sinY + p.oz * cosY;

        // Rotate X-axis
        let y2 = p.oy * cosX - z1 * sinX;
        let z2 = p.oy * sinX + z1 * cosX;

        // Perspective projection formula
        const distanceZ = z2 + 1000; // push grid backward
        const scale = fov / distanceZ;
        const screenX = x1 * scale + width / 2;
        const screenY = y2 * scale + height / 2;

        projected.push({
          x: screenX,
          y: screenY,
          depth: distanceZ,
          originalPoint: p,
        });
      });

      // Draw Grid Connections (Lines)
      ctx.lineWidth = 1.5;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        
        // Skip drawing off-screen nodes to save draw calls
        if (p1.x < -100 || p1.x > width + 100 || p1.y < -100 || p1.y > height + 100) {
          continue;
        }

        // Draw connections only to nearest neighbors in 3D grid index space
        // Let's connect along rows, cols, depth to create a mesh
        // Finding neighbors by index offset
        const idx = i;
        const colIdx = Math.floor(idx / (gridRows * gridDepth));
        const rowIdx = Math.floor((idx % (gridRows * gridDepth)) / gridDepth);
        const depthIdx = idx % gridDepth;

        const neighbors: number[] = [];
        if (colIdx < gridCols - 1) neighbors.push(idx + gridRows * gridDepth); // Right neighbor
        if (rowIdx < gridRows - 1) neighbors.push(idx + gridDepth); // Down neighbor
        if (depthIdx < gridDepth - 1) neighbors.push(idx + 1); // Depth neighbor

        neighbors.forEach((nIdx) => {
          const p2 = projected[nIdx];
          
          // Connect if depth permits
          const avgDepth = (p1.depth + p2.depth) / 2;
          const maxDepth = 1500;
          if (avgDepth > maxDepth) return;

          // Opacity decreases with distance/depth
          const depthRatio = 1 - (avgDepth - 500) / (maxDepth - 500);
          const opacity = Math.max(0, Math.min(0.28, depthRatio * 0.28));

          if (opacity > 0) {
            // Draw gradient lines to represent networking/cyber nodes
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // KaliRed color palette theme: rgba(241, 28, 28, opacity)
            ctx.strokeStyle = `rgba(241, 28, 28, ${opacity})`;
            ctx.stroke();
          }
        });
      }

      // Draw Nodes (Dots)
      projected.forEach((p) => {
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) return;

        const maxDepth = 1500;
        if (p.depth > maxDepth) return;

        const depthRatio = 1 - (p.depth - 500) / (maxDepth - 500);
        const size = Math.max(1.0, depthRatio * 3.5);
        const opacity = Math.max(0, Math.min(0.5, depthRatio * 0.5));

        if (opacity > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(241, 28, 28, ${opacity})`;
          ctx.fill();

          // Highlight some nodes randomly for dynamic cyber data feel
          if (Math.random() < 0.0001 && isPlaying) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(241, 28, 28, 0.85)";
            ctx.fill();
            // outer glow ring
            ctx.beginPath();
            ctx.arc(p.x, p.y, size * 5, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(241, 28, 28, 0.5)";
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPlaying, mounted]);

  if (!mounted) return null;

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0">
        {/* Background Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full bg-transparent"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      {/* Floating Toggle Controls */}
      <div className="fixed bottom-6 right-6 pointer-events-auto flex items-center gap-2 z-50">
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-black/80 hover:bg-primary-kaliRed border border-primary-grayBorder hover:border-primary-kaliRed text-primary-white shadow-lg backdrop-blur-md transition-all duration-300 group hover:shadow-glow-red"
          aria-label={isPlaying ? "Pause background animation" : "Play background animation"}
          title={isPlaying ? "Mettre en pause l'animation" : "Lancer l'animation"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          ) : (
            <Play className="w-4 h-4 text-primary-kaliRed group-hover:text-white transition-colors ml-0.5" />
          )}
        </motion.button>
      </div>
    </>
  );
}
