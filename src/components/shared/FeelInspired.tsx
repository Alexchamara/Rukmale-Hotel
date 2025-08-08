import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// All available images from the public/images folder
const AVAILABLE_IMAGES = [
  { src: "/images/bathroom1.jpg", alt: "Luxury Bathroom" },
  { src: "/images/cup1.JPG", alt: "Coffee Experience 1" },
  { src: "/images/cup2.JPG", alt: "Coffee Experience 2" },
  { src: "/images/cup3.JPG", alt: "Coffee Experience 3" },
  { src: "/images/cup4.JPG", alt: "Coffee Experience 4" },
  { src: "/images/cup5.JPG", alt: "Coffee Experience 5" },
  { src: "/images/cup6.JPG", alt: "Coffee Experience 6" },
  { src: "/images/cup7.JPG", alt: "Coffee Experience 7" },
  { src: "/images/cup8.JPG", alt: "Coffee Experience 8" },
  { src: "/images/family1.JPG", alt: "Family Moments 1" },
  { src: "/images/family2.JPG", alt: "Family Moments 2" },
  { src: "/images/family3.JPG", alt: "Family Moments 3" },
  { src: "/images/family4.JPG", alt: "Family Moments 4" },
  { src: "/images/family5.JPG", alt: "Family Moments 5" },
  { src: "/images/family6.JPG", alt: "Family Moments 6" },
  { src: "/images/family7.JPG", alt: "Family Moments 7" },
  { src: "/images/full1.JPG", alt: "Resort View 1" },
  { src: "/images/full2.JPG", alt: "Resort View 2" },
  { src: "/images/full3.JPG", alt: "Resort View 3" },
  { src: "/images/full4.JPG", alt: "Resort View 4" },
  { src: "/images/full5.JPG", alt: "Resort View 5" },
  { src: "/images/full6.JPG", alt: "Resort View 6" },
  { src: "/images/kitchen1.JPG", alt: "Kitchen & Dining 1" },
  { src: "/images/kitchen2.JPG", alt: "Kitchen & Dining 2" },
  { src: "/images/out1.JPG", alt: "Outdoor Experience 1" },
  { src: "/images/out2.JPG", alt: "Outdoor Experience 2" },
  { src: "/images/out3.JPG", alt: "Outdoor Experience 3" },
  { src: "/images/imgIntro1.png", alt: "Resort Introduction" },
  { src: "/images/imgMain2.png", alt: "Main Resort View" },
];

// Function to create gallery images with different crops and positions
const createGalleryImages = () => {
  // Shuffle the available images randomly
  const shuffled = [...AVAILABLE_IMAGES].sort(() => Math.random() - 0.5);
  
  // Take 16 images for the gallery (some may repeat with different crops)
  const selectedImages = [];
  
  // Add first 12 unique images with cover positioning for proper fit
  for (let i = 0; i < Math.min(12, shuffled.length); i++) {
    const image = shuffled[i];
    const cropVariations = [
      { bgSize: 'cover', bgPosition: 'center' },
      { bgSize: 'cover', bgPosition: 'center top' },
      { bgSize: 'cover', bgPosition: 'center bottom' },
      { bgSize: 'cover', bgPosition: 'left center' },
      { bgSize: 'cover', bgPosition: 'right center' },
      { bgSize: 'cover', bgPosition: '30% 70%' },
    ];
    
    const randomCrop = cropVariations[Math.floor(Math.random() * cropVariations.length)];
    
    selectedImages.push({
      id: `${image.src}-${i}`,
      src: image.src,
      bgSize: randomCrop.bgSize,
      bgPosition: randomCrop.bgPosition,
      alt: image.alt
    });
  }
  
  // Add 4 more images with artistic crops for variety (all using cover)
  for (let i = 0; i < 4 && i < shuffled.length; i++) {
    const image = shuffled[i];
    const artisticCrops = [
      { bgSize: 'cover', bgPosition: '25% 75%' },
      { bgSize: 'cover', bgPosition: '75% 25%' },
      { bgSize: 'cover', bgPosition: '50% 80%' },
      { bgSize: 'cover', bgPosition: '80% 50%' },
    ];
    
    const randomCrop = artisticCrops[i % artisticCrops.length];
    
    selectedImages.push({
      id: `${image.src}-artistic-${i}`,
      src: image.src,
      bgSize: randomCrop.bgSize,
      bgPosition: randomCrop.bgPosition,
      alt: `${image.alt} - Detail View`
    });
  }
  
  // Shuffle the final array one more time
  return selectedImages.sort(() => Math.random() - 0.5);
};

// Type for gallery image
type GalleryImage = {
  id: string;
  src: string;
  bgSize: string;
  bgPosition: string;
  alt: string;
};

function ImageModal({ isOpen, onClose, images, initialIndex }: {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <div className="relative w-full h-full flex flex-col">
          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black/20 backdrop-blur-sm rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <X size={24} />
          </motion.button>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center p-4 pb-0">
            <div className="relative max-w-6xl max-h-[70vh] w-full">
              {/* Navigation Arrows */}
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black/30 backdrop-blur-sm rounded-full p-3"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              >
                <ChevronLeft size={32} />
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black/30 backdrop-blur-sm rounded-full p-3"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
              >
                <ChevronRight size={32} />
              </motion.button>

              {/* Main Image */}
              <motion.div
                key={currentIndex}
                className="w-full h-[70vh] rounded-lg overflow-hidden"
                style={{ 
                  backgroundImage: `url('${images[currentIndex].src}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <span className="font-['Outfit:Medium',_sans-serif]">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="p-4 pt-6">
            <motion.div 
              className="flex justify-center space-x-2 overflow-x-auto max-w-full pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex space-x-3 px-4">
                {images.map((image: GalleryImage, index: number) => (
                  <motion.div
                    key={image.id}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                      index === currentIndex 
                        ? 'border-white shadow-lg scale-105' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                    style={{ 
                      backgroundImage: `url('${image.src}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    whileHover={{ scale: index === currentIndex ? 1.05 : 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function FeelInspired() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Generate new random gallery images on component mount and page refresh
  useEffect(() => {
    const newGalleryImages = createGalleryImages();
    setGalleryImages(newGalleryImages);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (!isAutoScrolling || galleryImages.length === 0) return;

    const interval = setInterval(() => {
      setTranslateX(prev => {
        if (!containerRef.current) return prev;
        
        const imageWidth = 400 + 24; // image width + gap
        const totalWidth = galleryImages.length * imageWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const maxScroll = -(totalWidth - containerWidth);
        
        const newValue = prev - 1; // Move 1px to the left every 16ms (approximately 60fps)
        
        // Reset to start when we've scrolled past all images
        if (newValue <= maxScroll - imageWidth) {
          return 0;
        }
        
        return newValue;
      });
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, [isAutoScrolling, galleryImages.length]);

  const handleImageClick = (imageId: string) => {
    const index = galleryImages.findIndex((img: GalleryImage) => img.id === imageId);
    setSelectedImageIndex(index);
  };

  const scrollLeft = () => {
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
    if (containerRef.current) {
      const scrollAmount = 350;
      setTranslateX(prev => Math.min(prev + scrollAmount, 0));
    }
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
    if (containerRef.current) {
      const scrollAmount = 350;
      const maxScroll = -(galleryImages.length * 416 - containerRef.current.offsetWidth);
      setTranslateX(prev => Math.max(prev - scrollAmount, maxScroll));
    }
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false); // Pause auto-scroll on hover
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true); // Resume auto-scroll when not hovering
  };

  return (
    <>
      <motion.div 
        ref={ref}
        className="py-16 lg:py-24 px-4 lg:px-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="font-['Outfit:Bold',_sans-serif] font-bold text-black text-[32px] lg:text-[40px] tracking-[1.6px] mb-4">
            Feel Inspired
          </div>
          <div className="font-['Outfit:Regular',_sans-serif] text-black text-[16px] lg:text-[20px]">
            Discover the beauty and tranquility of our resort through these captivating moments.
          </div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full p-3 -ml-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 rounded-full p-3 -mr-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Images Container */}
          <div 
            ref={containerRef} 
            className="overflow-hidden w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="flex space-x-6"
              style={{
                transform: `translateX(${translateX}px)`,
                width: 'fit-content'
              }}
              transition={{ duration: 0 }} // Disable transition for smooth auto-scroll
            >
              {galleryImages.map((image: GalleryImage, index: number) => (
                <motion.div 
                  key={image.id}
                  className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] h-[401px] rounded-[25px] overflow-hidden cursor-pointer relative group"
                  style={{ 
                    backgroundImage: `url('${image.src}')`,
                    backgroundSize: image.bgSize,
                    backgroundPosition: image.bgPosition,
                    backgroundRepeat: 'no-repeat'
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index % 8) * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.3)"
                  }}
                  onClick={() => handleImageClick(image.id)}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 text-white font-['Outfit:Medium',_sans-serif] bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      View Image
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicators */}
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {Array.from({ length: Math.ceil(galleryImages.length / 4) }).map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-black/30"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.6)" }}
              />
            ))}
          </motion.div>
        </div>

        {/* Separator Line */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="h-px bg-black/10"></div>
        </div>
      </motion.div>

      {/* Enhanced Image Modal */}
      <ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        images={galleryImages}
        initialIndex={selectedImageIndex || 0}
      />
    </>
  );
}