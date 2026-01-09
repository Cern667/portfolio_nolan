"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex(index);
  };

  // Si une seule image, pas besoin de slider
  if (images.length === 1) {
    return (
      <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative h-96 rounded-xl overflow-hidden border border-primary-grayBorder group">
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-primary-black/70 hover:bg-primary-kaliRed border border-primary-grayBorder hover:border-primary-kaliRed transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-primary-black/70 hover:bg-primary-kaliRed border border-primary-grayBorder hover:border-primary-kaliRed transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-kaliRed w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-black/70 border border-primary-grayBorder text-white text-sm font-mono z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
