'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-6">
        {/* Main Image with Decorative Background */}
        <div className="relative">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-white p-4">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-cover rounded-xl cursor-pointer"
              priority
              onClick={() => openModal(currentIndex)}
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-rwua-neutral-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <ChevronRight className="w-5 h-5 text-rwua-neutral-700" />
                </button>
              </>
            )}

            {/* Decorative Elements - Inspired by the second image */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"></div>
            <div className="absolute top-8 right-12 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-70"></div>
            <div className="absolute top-12 right-6 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60"></div>
            
            {/* Background decorative layers */}
            <div className="absolute inset-0 -z-10 transform rotate-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20"></div>
            <div className="absolute inset-0 -z-20 transform -rotate-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-15"></div>
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full rwua-body-small">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-3 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                  index === currentIndex 
                    ? 'border-rwua-primary shadow-lg' 
                    : 'border-rwua-neutral-200 hover:border-rwua-neutral-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-rwua-primary/20"></div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Full-Screen View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full max-w-3xl max-h-[80vh]">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Full size image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full rwua-body-small">
                {currentIndex + 1} of {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}