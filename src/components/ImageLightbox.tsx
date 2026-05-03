'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  images: readonly { src: string; alt: string }[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex = 0, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium supports-[backdrop-filter]:backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </>
      )}

      {/* Image */}
      <div className="relative max-w-7xl max-h-[90vh] w-full min-h-[50vh] flex items-center justify-center p-4">
        <div className="relative h-[85vh] max-h-[900px] w-full max-w-6xl">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain rounded-lg shadow-2xl"
            sizes="100vw"
            priority
            unoptimized={images[currentIndex].src.startsWith('http')}
          />
        </div>
        
        {/* Image Caption */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white text-center max-w-2xl supports-[backdrop-filter]:backdrop-blur-sm">
          {images[currentIndex].alt}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full supports-[backdrop-filter]:backdrop-blur-sm">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-brand-main scale-110'
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                loading="lazy"
                unoptimized={image.src.startsWith('http')}
              />
            </button>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        Χρησιμοποιήστε τα βέλη ή πατήστε ESC για έξοδο
      </div>
    </div>
  );
}

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  images?: readonly { src: string; alt: string }[];
  index?: number;
}

export function ClickableImage({ src, alt, className = '', images, index = 0 }: ClickableImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const allImages = images || [{ src, alt }];

  return (
    <>
      <div className="relative group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className={`${className} h-auto w-full transition-all duration-300 group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, 896px"
          loading="lazy"
          unoptimized={src.startsWith('http')}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <ImageLightbox
        images={allImages}
        initialIndex={index}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}

