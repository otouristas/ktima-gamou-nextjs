'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

// Gallery images list - using dynamic imports for better performance
const galleryImages = [
  'DSC_7432.JPG',
  'DSC_7433.JPG',
  'DSC_7434.JPG',
  'DSC_7435.JPG',
  'DSC_7437.JPG',
  'DSC_7439.JPG',
  'DSC_7441.JPG',
  'DSC_7442.JPG',
  'DSC_7444.JPG',
  'DSC_7451.JPG',
  'DSC_7452.JPG',
  'DSC_7462.JPG',
  'DSC_7465.JPG',
  'DSC_7466.JPG',
  'DSC_7471.JPG',
  'DSC_7473.JPG',
  'DSC_7477.JPG',
  'DSC_7480.JPG',
  'DSC_7481.JPG',
  'DSC_7483.JPG',
  'DSC_7484.JPG',
  'DSC_7485.JPG',
  'DSC_7486.JPG',
  'DSC_7487.JPG',
  'DSC_7489.JPG',
  'DSC_7490.JPG',
  'DSC_7492.JPG',
  'DSC_7493.JPG',
  'DSC_7494.JPG',
  'DSC_7496.JPG',
  'DSC_7497.JPG',
  'DSC_7501.JPG',
  'DSC_7503.JPG',
  'DSC_7504.JPG',
  'DSC_7506.JPG',
  'DSC_7507.JPG',
  'DSC_7509.JPG',
  'DSC_7512.JPG',
  'DSC_7513.JPG',
  'DSC_7515.JPG',
  'DSC_7517.JPG',
  'DSC_7519.JPG',
  'DSC_7520.JPG',
  'DSC_7521.JPG',
  'DSC_7522.JPG',
  'DSC_7524.JPG',
  'DSC_7525.JPG',
  'DSC_7526.JPG',
  'DSC_7527.JPG',
  'DSC_7528.JPG',
  'DSC_7530.JPG',
  'DSC_7532.JPG',
  'DSC_7533.JPG',
  'DSC_7534.JPG',
  'DSC_7537.JPG',
  'DSC_7538.JPG',
  'DSC_7539.JPG',
  'DSC_7540.JPG',
  'DSC_7542.JPG',
  'DSC_7543.JPG',
  'DSC_7544.JPG',
  'DSC_7545.JPG',
  'DSC_7546.JPG',
  'DSC_7547.JPG',
  'DSC_7548.JPG',
  'DSC_7549.JPG',
  'DSC_7550.JPG',
  'DSC_7551.JPG',
  'DSC_7552.JPG',
  'DSC_7553.JPG',
  'DSC_7554.JPG',
  'DSC_7555.JPG',
  'DSC_7556.JPG',
  'DSC_7557.JPG',
  'DSC_7558.JPG',
  'DSC_7559.JPG',
  'DSC_7561.JPG',
  'DSC_7562.JPG',
  'DSC_7563.JPG',
  'DSC_7565.JPG',
  'DSC_7566.JPG',
  'DSC_7568.JPG',
  'DSC_7569.JPG',
  'DSC_7570.JPG',
  'DSC_7571.JPG',
  'DSC_7572.JPG',
  'DSC_7576.JPG',
  'DSC_7577.JPG',
  'DSC_7579.JPG',
  'DSC_7580.JPG',
  'DSC_7581.JPG',
  'DSC_7582.JPG',
  'DSC_7583.JPG',
  'DSC_7584.JPG',
  'DSC_7585.JPG',
  'DSC_7587.JPG',
  'DSC_7588.JPG',
  'DSC_7589.JPG',
  'DSC_7590.JPG',
  'DSC_7591.JPG',
  'DSC_7592.JPG',
  'DSC_7593.JPG',
  'DSC_7595.JPG',
  'DSC_7596.JPG',
  'DSC_7598.JPG',
  'DSC_7600.JPG',
  'DSC_7601.JPG',
  'DSC_7602.JPG',
  'DSC_7603.JPG',
  'DSC_7606.JPG',
  'DSC_7608.JPG',
  'DSC_7610.JPG',
  'DSC_7613.JPG',
  'DSC_7614.JPG',
  'DSC_7618.JPG',
  'DSC_7619.JPG',
  'DSC_7621.JPG',
  'DSC_7622.JPG',
  'DSC_7623.JPG',
  'DSC_7624.JPG',
  'DSC_7625.JPG',
  'DSC_7626.JPG',
  'DSC_7627.JPG',
  'DSC_7629.JPG',
  'DSC_7631.JPG',
  'DSC_7632.JPG',
  'DSC_7633.JPG',
  'DSC_7634.JPG',
  'DSC_7635.JPG',
  'DSC_7636.JPG',
  'DSC_7637.JPG',
  'DSC_7638.JPG',
  'DSC_7639.JPG',
  'DSC_7642.JPG',
  'DSC_7643.JPG',
  'DSC_7644.JPG',
  'DSC_7645.JPG',
  'DSC_7647.JPG',
  'DSC_7648.JPG',
  'DSC_7650.JPG',
  'DSC_7655.JPG',
  'DSC_7656.JPG',
  'DSC_7657.JPG',
  'DSC_7658.JPG',
  'DSC_7659.JPG',
  'DSC_7660.JPG',
  'DSC_7661.JPG',
  'DSC_7662.JPG',
  'DSC_7663.JPG',
  'DSC_7667.JPG',
  'DSC_7668.JPG',
  'DSC_7669.JPG',
  'DSC_7670.JPG',
  'DSC_7673.JPG',
  'DSC_7674.JPG',
  'DSC_7676.JPG',
  'DSC_7677.JPG',
  'DSC_7681.JPG',
  'DSC_7682.JPG',
  'DSC_7683.JPG',
  'DSC_7684.JPG',
  'DSC_7685.JPG',
  'DSC_7686.JPG',
  'DSC_7687.JPG',
  'DSC_7688.JPG',
  'DSC_7689.JPG',
  'DSC_7690.JPG',
  'DSC_7694.JPG',
  'DSC_7698.JPG',
  'DSC_7699.JPG',
  'DSC_7701.JPG',
  'DSC_7704.JPG',
  'DSC_7705.JPG',
  'DSC_7709.JPG',
  'DSC_7710.JPG',
  'DSC_7712.JPG',
  'DSC_7713.JPG',
  'DSC_7714.JPG',
  'DSC_7715.JPG',
  'DSC_7716.JPG',
  'DSC_7720.JPG',
  'DSC_7721.JPG',
  'DSC_7722.JPG',
  'DSC_7723.JPG',
  'DSC_7724.JPG',
  'DSC_7725.JPG',
  'DSC_7726.JPG',
  'DSC_7727.JPG',
  'DSC_7728.JPG',
  'DSC_7729.JPG',
  'DSC_7730.JPG',
  'DSC_7732.JPG',
  'DSC_7733.JPG',
  'DSC_7736.JPG',
  'DSC_7737.JPG',
  'DSC_7738.JPG',
  'DSC_7742.JPG',
  'DSC_7743.JPG',
  'DSC_7748.JPG',
  'DSC_7749.JPG',
  'DSC_7750.JPG',
  'DSC_7752.JPG',
  'DSC_7753.JPG',
  'DSC_7756.JPG',
  'DSC_7757.JPG',
  'DSC_7759.JPG',
  'DSC_7760.JPG',
  'DSC_7761.JPG',
  'DSC_7763.JPG',
  'DSC_7765.JPG',
  'DSC_7767.JPG',
  'DSC_7768.JPG',
  'DSC_7769.JPG',
  'DSC_7770.JPG',
  'DSC_7771.JPG',
  'DSC_7772.JPG',
  'DSC_7775.JPG',
  'DSC_7777.JPG',
  'DSC_7778.JPG',
  'DSC_7779.JPG',
  'DSC_7782.JPG',
  'DSC_7783.JPG',
  'DSC_7784.JPG',
  'DSC_7786.JPG',
  'DSC_7787.JPG',
  'DSC_7788.JPG',
  'DSC_7789.JPG',
  'DSC_7795.JPG',
  'DSC_7796.JPG',
  'DSC_7805.JPG',
  'DSC_7806.JPG',
  'DSC_7807.JPG',
  'DSC_7808.JPG',
  'DSC_7809.JPG',
  'DSC_7810.JPG',
  'DSC_7811.JPG',
  'DSC_7813.JPG',
  'DSC_7814.JPG',
  'DSC_7815.JPG',
  'DSC_7816.JPG',
  'DSC_7819.JPG',
  'DSC_7821.JPG',
  'DSC_7822.JPG',
  'DSC_7823.JPG',
  'DSC_7824.JPG',
  'DSC_7828.JPG',
  'DSC_7829.JPG',
  'DSC_7830.JPG',
  'DSC_7831.JPG',
  'DSC_7832.JPG',
  'DSC_7833.JPG',
  'DSC_7836.JPG',
  'DSC_7843.JPG',
  'DSC_7845.JPG',
  'DSC_7846.JPG',
  'DSC_7847.JPG',
  'DSC_7848.JPG',
  'DSC_7849.JPG',
  'DSC_7850.JPG',
  'DSC_7853.JPG',
  'DSC_7854.JPG',
  'DSC_7855.JPG',
  'DSC_7856.JPG',
  'DSC_7857.JPG',
  'DSC_7858.JPG',
  'DSC_7859.JPG',
  'DSC_7860.JPG',
  'DSC_7862.JPG',
  'DSC_7863.JPG',
  'DSC_7865.JPG',
  'DSC_7866.JPG',
  'DSC_7867.JPG',
  'DSC_7868.JPG',
  'DSC_7869.JPG',
  'DSC_7870.JPG',
  'DSC_7871.JPG',
  'DSC_7872.JPG'
];

// Helper function to get image URL
function getImageUrl(imageName: string): string {
  return `/images/gallery/${imageName}`;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  images: string[];
}

const ImageModal = ({ isOpen, onClose, currentIndex, onPrevious, onNext, images }: ImageModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const currentImage = images[currentIndex];

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.5, 5));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.5, 0.5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile Safari
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      e.preventDefault(); // Prevent scrolling
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  useEffect(() => {
    resetZoom();
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white"
            onClick={onPrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white"
            onClick={onNext}
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 z-50 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white"
              onClick={handleZoomOut}
            >
              <ZoomOut className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white"
              onClick={resetZoom}
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white"
              onClick={handleZoomIn}
            >
              <ZoomIn className="w-5 h-5" />
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-4 py-2 rounded-lg">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Image */}
          <div
            className="w-full h-full min-h-[70vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-[80vh] w-full max-w-6xl">
              <Image
                src={getImageUrl(currentImage)}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain select-none"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                }}
                sizes="95vw"
                unoptimized
                draggable={false}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex(prev => 
      prev > 0 ? prev - 1 : galleryImages.length - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex(prev => 
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Φωτογραφίες</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8">
              Ανακαλύψτε τη μαγεία του Κτήματος Ωρίων μέσα από τις φωτογραφίες μας. 
              Κάθε εικόνα αφηγείται μια ιστορία αγάπης, χαράς και αξέχαστων αναμνήσεων.
            </p>
            <div className="text-muted-foreground">
              <p className="text-sm">
                Κάντε κλικ σε οποιαδήποτε φωτογραφία για μεγέθυνση και περιηγηθείτε με τα βελάκια του πληκτρολογίου
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={getImageUrl(image)}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          currentIndex={selectedImageIndex}
          onPrevious={goToPrevious}
          onNext={goToNext}
          images={galleryImages}
        />
      </div>
    </Layout>
  );
}
