"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Gallery categories with images
const galleryCategories = [
  {
    id: "1",
    title: "Classroom Environment",
    description: "Our modern learning space",
    icon: "📚",
    images: [
      "/gallery/classroom-1.jpg",
      "/gallery/classroom-2.jpg",
      "/gallery/classroom-3.jpg",
    ],
  },
  {
    id: "2",
    title: "Teaching Sessions",
    description: "Interactive learning in progress",
    icon: "👨‍🏫",
    images: ["/gallery/teaching-1.jpg", "/gallery/teaching-2.jpg"],
  },
  {
    id: "3",
    title: "Student Activities",
    description: "Students engaged in learning",
    icon: "🎓",
    images: ["/gallery/students-1.jpg", "/gallery/students-2.jpg"],
  },
  // {
  //   id: "4",
  //   title: "Institute Building",
  //   description: "Our institute in Palwal",
  //   icon: "🏢",
  //   images: [
  //     "/gallery/building-1.jpg",
  //     "/gallery/building-2.jpg",
  //     "/gallery/building-3.jpg",
  //   ],
  // },
  // {
  //   id: "5",
  //   title: "Study Materials",
  //   description: "Comprehensive study resources",
  //   icon: "📖",
  //   images: [
  //     "/gallery/materials-1.jpg",
  //     "/gallery/materials-2.jpg",
  //     "/gallery/materials-3.jpg",
  //   ],
  // },
  // {
  //   id: "6",
  //   title: "Achievement Display",
  //   description: "Student achievements showcase",
  //   icon: "🏆",
  //   images: [
  //     "/gallery/achievements-1.jpg",
  //     "/gallery/achievements-2.jpg",
  //     "/gallery/achievements-3.jpg",
  //   ],
  // },
];

// Helper function to check if image exists
const imageExists = (src: string): boolean => {
  // This will be handled by Next.js Image component's onError
  return true;
};

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const selectedCategoryData = selectedCategory
    ? galleryCategories.find((cat) => cat.id === selectedCategory)
    : null;

  const handleOpenGallery = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const handleCloseGallery = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const handleNextImage = React.useCallback(() => {
    if (selectedCategoryData) {
      setCurrentImageIndex((prev) =>
        prev < selectedCategoryData.images.length - 1 ? prev + 1 : 0
      );
    }
  }, [selectedCategoryData]);

  const handlePrevImage = React.useCallback(() => {
    if (selectedCategoryData) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedCategoryData.images.length - 1
      );
    }
  }, [selectedCategoryData]);

  // Keyboard navigation
  React.useEffect(() => {
    if (!selectedCategory) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseGallery();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedCategory, selectedCategoryData]);

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Photo Gallery</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at our institute, classrooms, and learning
              environment. Click on any gallery to view photos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => handleOpenGallery(category.id)}
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 overflow-hidden">
                  {/* Try to show first image if available, otherwise show icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                  </div>

                  {/* Try to load first image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {category.images[0] && (
                      <Image
                        src={category.images[0]}
                        alt={category.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Hide image if it doesn't exist, show icon instead
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold mb-1">{category.title}</h3>
                      <p className="text-sm text-white/90">
                        {category.description}
                      </p>
                      <p className="text-xs text-white/80 mt-1">
                        {category.images.length} photos
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    Click to view {category.images.length} photos →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.google.com/maps/place/Ishant+Commerce+Classes/@28.1486,77.3254,17z/data=!4m2!3m1!1s0x0:0xa60b6b8ba94b2337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>View More Photos on Google Maps</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedCategory && selectedCategoryData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50"
              onClick={handleCloseGallery}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-6xl max-h-[90vh] bg-background rounded-lg overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {selectedCategoryData.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {currentImageIndex + 1} of{" "}
                        {selectedCategoryData.images.length}
                      </p>
                    </div>
                    <button
                      onClick={handleCloseGallery}
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                      aria-label="Close gallery"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-[90vh] bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedCategory}-${currentImageIndex}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        key={`${selectedCategory}-img-${currentImageIndex}`}
                        src={selectedCategoryData.images[currentImageIndex]}
                        alt={`${selectedCategoryData.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        fill
                        className="object-contain"
                        priority
                        unoptimized
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {selectedCategoryData.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {selectedCategoryData.images.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide justify-center">
                      {selectedCategoryData.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-primary scale-110"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            key={`thumb-${selectedCategory}-${index}`}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          {/* Fallback thumbnail */}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
