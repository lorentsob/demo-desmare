'use client';

import Image from 'next/image';
import { useState } from 'react';

// Sample gallery images (using the available images for now)
const galleryImages = [
  {
    id: 1,
    src: '/images/horizontal-1.jpg',
    alt: 'Demolizione struttura',
    category: 'demolizioni',
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: '/images/vertical-1.jpg',
    alt: 'Recupero materiali',
    category: 'recupero',
    width: 800,
    height: 1200,
  },
  {
    id: 3,
    src: '/images/horizontal-2.jpg',
    alt: 'Smaltimento rifiuti edilizi',
    category: 'smaltimento',
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    src: '/images/vertical-2.jpg',
    alt: 'Attrezzature specializzate',
    category: 'demolizioni',
    width: 800,
    height: 1200,
  },
  {
    id: 5,
    src: '/images/horizontal-3.jpg',
    alt: 'Cantiere di demolizione',
    category: 'demolizioni',
    width: 1200,
    height: 800,
  },
  {
    id: 6,
    src: '/images/horizontal-4.jpg',
    alt: 'Materiali recuperati',
    category: 'recupero',
    width: 1200,
    height: 800,
  },
];

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  // Open lightbox
  const openLightbox = (imageId: number) => {
    setCurrentImage(imageId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setCurrentImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to next image
  const nextImage = () => {
    if (currentImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === currentImage,
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentImage(filteredImages[nextIndex].id);
  };

  // Navigate to previous image
  const prevImage = () => {
    if (currentImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === currentImage,
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImage(filteredImages[prevIndex].id);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (currentImage === null) return;

    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Gallery</h1>
          <p className="text-xl text-text-secondary">
            Esplora le immagini dei nostri lavori e progetti realizzati
          </p>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-6 py-3 text-lg transition-colors ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Tutti
          </button>
          <button
            onClick={() => setFilter('demolizioni')}
            className={`rounded-full px-6 py-3 text-lg transition-colors ${
              filter === 'demolizioni'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Demolizioni
          </button>
          <button
            onClick={() => setFilter('smaltimento')}
            className={`rounded-full px-6 py-3 text-lg transition-colors ${
              filter === 'smaltimento'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Smaltimento
          </button>
          <button
            onClick={() => setFilter('recupero')}
            className={`rounded-full px-6 py-3 text-lg transition-colors ${
              filter === 'recupero'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Recupero
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative h-[250px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg font-medium text-white">
                    {image.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-xl text-text-secondary">
              Nessuna immagine trovata per questa categoria.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {currentImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute right-4 top-4 p-2 text-white transition-colors hover:text-primary"
            onClick={closeLightbox}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white transition-colors hover:text-primary"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div
            className="relative max-h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages.find((img) => img.id === currentImage)?.src && (
              <div className="relative">
                <Image
                  src={
                    galleryImages.find((img) => img.id === currentImage)?.src ||
                    ''
                  }
                  alt={
                    galleryImages.find((img) => img.id === currentImage)?.alt ||
                    ''
                  }
                  width={1200}
                  height={800}
                  priority
                  className="max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                  <p>
                    {galleryImages.find((img) => img.id === currentImage)?.alt}
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white transition-colors hover:text-primary"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
