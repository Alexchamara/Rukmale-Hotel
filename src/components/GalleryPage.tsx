import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';
import FeelInspired from './shared/FeelInspired';
import svgPaths from "../imports/svg-6zn9x4s6db";

const imgMain = "/images/full5.JPG";
const imgRectangle18 = "/images/kitchen1.JPG";
const imgRectangle19 = "/images/bathroom1.jpg";
const imgRectangle20 = "/images/out1.JPG";
const imgRectangle21 = "/images/full1.JPG";
const imgRectangle22 = "/images/cup5.JPG";
const imgRectangle23 = "/images/bathroom1.jpg";
const imgRectangle24 = "/images/family5.JPG";
const imgRectangle25 = "/images/kitchen2.JPG";
const imgRectangle26 = "/images/full6.JPG";
const imgRectangle27 = "/images/bathroom1.jpg";
const imgRectangle28 = "/images/bathroom1.jpg";
const imgRectangle29 = "/images/out3.JPG";
const imgRectangle30 = "/images/cup2.JPG";
const imgRectangle31 = "/images/cup7.JPG";
const imgRectangle32 = "/images/cup4.JPG";
const imgRectangle33 = "/images/cup8.JPG";
const imgRectangle34 = "/images/family6.JPG";
const imgRectangle35 = "/images/out2.JPG";
const imgRectangle36 = "/images/family3.JPG";
const imgRectangle37 = "/images/family7.JPG";
const imgRectangle38 = "/images/family2.JPG";
const imgRectangle39 = "/images/full4.JPG";
const imgRectangle40 = "/images/full4.JPG";
const imgRectangle41 = "/images/full2.JPG";

function HeroSection({ onNavigate, currentPage }: { onNavigate: (page: string, section?: string) => void, currentPage: string }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div ref={ref} className="relative h-[500px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[0%_16.18%] bg-no-repeat"
        style={{ 
          backgroundImage: `url('${imgMain}')`,
          backgroundSize: '100% 170.8%',
          y
        }}
      />
      
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.div 
            className="font-['Baskervville_SC'] text-[28px] lg:text-[40px] tracking-[6px] [text-shadow:rgba(0,0,0,0.5)_0px_4px_2px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            Explore The Bungalow
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function BookingForm({ onNavigate }: { onNavigate: (page: string, section?: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="relative z-20 mx-4 lg:mx-auto max-w-6xl px-4 -mt-12"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 lg:p-8"
        whileHover={{ 
          boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
          y: -5
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
                <path d={svgPaths.p2b81e400} fill="black" />
              </svg>
            </div>
            <div>
              <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-black text-[20px]">
                Check In
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[12px]">
                2025-03-16
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
                <path d={svgPaths.p2b81e400} fill="black" />
              </svg>
            </div>
            <div>
              <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-black text-[20px]">
                Check Out
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[12px]">
                2025-03-20
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="size-[25px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <path d={svgPaths.p3147b80} fill="black" />
              </svg>
            </div>
            <div>
              <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-black text-[20px]">
                Guest
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[12px]">
                4 Guests
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.button 
              className="bg-black/25 h-[53px] rounded-[50px] px-6 w-full"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(0,0,0,0.35)",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => onNavigate('booking')}
            >
              <div className="font-['Cormorant:Bold',_sans-serif] font-bold text-black text-[20px]">
                Check Availability
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PhotoTourSection({ targetSection }: { targetSection?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { id: 'kitchen', name: 'Full kitchen', image: imgRectangle18 },
    { id: 'dining', name: 'Dining area', image: imgRectangle21 },
    { id: 'bedroom01', name: 'Bedroom 01', image: imgRectangle22 },
    { id: 'bedroom02', name: 'Bedroom 02', image: imgRectangle24 },
    { id: 'bathroom01', name: 'Full bathroom 01', image: imgRectangle23 },
    { id: 'bathroom02', name: 'Full bathroom 02', image: imgRectangle19 },
    { id: 'exterior', name: 'Exterior', image: imgRectangle20 }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (targetSection) {
      setTimeout(() => {
        scrollToSection(targetSection);
      }, 1000);
    }
  }, [targetSection]);

  return (
    <motion.div 
      ref={ref}
      className="py-16 lg:py-24 px-4 lg:px-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="font-['Outfit:Bold',_sans-serif] font-bold text-black text-[32px] lg:text-[40px] tracking-[4px] mb-8">
          PHOTO TOUR
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => scrollToSection(category.id)}
            >
              <motion.div
                className="h-24 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] bg-center bg-cover bg-no-repeat mb-4"
                style={{ backgroundImage: `url('${category.image}')` }}
                whileHover={{ boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
              />
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[14px] lg:text-[16px] text-center">
                {category.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ImageModal({ images, isOpen, currentIndex, onClose, onNavigate }: { 
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  const handlePrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    setActiveIndex(newIndex);
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(newIndex);
    onNavigate(newIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    onNavigate(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex]);

  return (
    <AnimatePresence>
      {isOpen && images.length > 0 && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.button
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              ✕
            </motion.button>
            
            <div 
              className="w-full max-w-6xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-4xl mb-6">
                {images.length > 1 && (
                  <>
                    <motion.button
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrevious}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    
                    <motion.button
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}
                
                <motion.div
                  key={activeIndex}
                  className="w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                  <img
                    src={images[activeIndex]}
                    alt={`Gallery image ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {activeIndex + 1} / {images.length}
                </div>
              </div>
              
              {images.length > 1 && (
                <motion.div
                  className="w-full max-w-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex space-x-2 overflow-x-auto pb-2 justify-center">
                    {images.map((image, index) => (
                      <motion.div
                        key={index}
                        className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                          index === activeIndex ? 'border-white' : 'border-transparent'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function RoomSection({ 
  id, 
  title, 
  subtitle, 
  description, 
  details, 
  images, 
  price, 
  buttonText, 
  onImageClick,
  onNavigate 
}: {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  images: { main: string; gallery: string[] };
  price: string;
  buttonText: string;
  onImageClick: (images: string[], index: number) => void;
  onNavigate: (page: string, section?: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allImages = [images.main, ...images.gallery];

  const handleImageClick = (clickedImage: string) => {
    const imageIndex = allImages.findIndex(img => img === clickedImage);
    onImageClick(allImages, imageIndex);
  };

  return (
    <motion.div 
      id={id}
      ref={ref}
      className="py-16 lg:py-24 px-4 lg:px-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="font-['Outfit:Bold',_sans-serif] font-bold text-black text-[22px] tracking-[2.2px] mb-2">
                {title}
                {subtitle && (
                  <span className="font-['Outfit:Medium',_sans-serif] font-medium text-[20px] tracking-[0.8px] ml-2">
                    {subtitle}
                  </span>
                )}
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-[#6a6a6a] text-[16px] mb-6">
                {description}
              </div>
              
              <div className="space-y-2 mb-8">
                {details.map((detail, index) => (
                  <div key={index} className="font-['Outfit:Regular',_sans-serif] text-[#6a6a6a] text-[16px] tracking-[0.64px]">
                    {detail}
                  </div>
                ))}
              </div>

              {price && (
                <div className="font-['Outfit:Regular',_sans-serif] text-[#6a6a6a] text-[16px] tracking-[0.64px] mb-8">
                  • LKR <span className="font-['Outfit:Bold',_sans-serif] font-bold">{price}/</span>night
                </div>
              )}

              <motion.button 
                className="bg-black/25 h-[33px] rounded-[10px] px-6 shadow-[0px_0px_10px_0px_#000000]"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(0,0,0,0.35)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => onNavigate('booking')}
              >
                <div className="font-['Outfit:Bold',_sans-serif] font-bold text-black text-[14px] tracking-[0.56px]">
                  {buttonText}
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <motion.div
                className="h-[300px] lg:h-[496px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-center bg-cover bg-no-repeat cursor-pointer"
                style={{ backgroundImage: `url('${images.main}')` }}
                whileHover={{ scale: 1.02, boxShadow: "0px 8px 25px rgba(0,0,0,0.2)" }}
                onClick={() => handleImageClick(images.main)}
              />
              
              <div className="grid grid-cols-2 gap-6">
                {images.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="h-[245px] rounded-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-center bg-cover bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url('${image}')` }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 8px 25px rgba(0,0,0,0.2)" }}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 h-px bg-black/10"></div>
      </div>
    </motion.div>
  );
}

export default function GalleryPage({ onNavigate, currentPage, targetSection }: { 
  onNavigate: (page: string, section?: string) => void, 
  currentPage: string,
  targetSection?: string 
}) {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (images: string[], index: number) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setCurrentImageIndex(0);
  };

  const handleModalNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  const roomData = [
    {
      id: 'kitchen',
      title: 'Full Kitchen',
      description: 'A fully equipped kitchen with modern appliances and everything you need for a comfortable stay.',
      details: [
        '• Refrigerator and freezer',
        '• Microwave and stove',
        '• Kitchen utensils and cookware',
        '• Dining table and chairs',
        '• Coffee maker'
      ],
      images: {
        main: imgRectangle18,
        gallery: [imgRectangle39, imgRectangle25]
      },
      price: '',
      buttonText: 'Book Full Bungalow'
    },
    {
      id: 'dining',
      title: 'Dining Area',
      description: 'A spacious dining area perfect for family meals and gatherings.',
      details: [
        '• Large dining table',
        '• Comfortable seating for 6',
        '• Natural lighting',
        '• Adjacent to kitchen',
        '• Perfect for family meals'
      ],
      images: {
        main: imgRectangle21,
        gallery: [imgRectangle40, imgRectangle26]
      },
      price: '',
      buttonText: 'Book Full Bungalow'
    },
    {
      id: 'bedroom01',
      title: 'Bedroom 01',
      subtitle: '(Couple Wing)',
      description: 'Intimate and cozy, ideal for couples seeking a peaceful getaway.',
      details: [
        '• Double bed',
        '• Bathroom 01',
        '• Air conditioning',
        '• Iron',
        '• Clothing storage',
        '• Extra pillows and blankets',
        '• Sleep up to 02'
      ],
      images: {
        main: imgRectangle32,
        gallery: [imgRectangle31, imgRectangle22, imgRectangle30, imgRectangle33]
      },
      price: '12,000',
      buttonText: 'Reserve your couple wing'
    },
    {
      id: 'bedroom02',
      title: 'Bedroom 02',
      subtitle: '(Family Wing)',
      description: 'Perfectly designed for families or small groups looking for comfort and convenience.',
      details: [
        '• Queen bed',
        '• Bathroom 01',
        '• Air conditioning',
        '• Iron',
        '• Clothing storage',
        '• Essentials',
        '• Room-darkening shades',
        '• Extra pillows and blankets',
        '• Sleep up to 02'
      ],
      images: {
        main: imgRectangle24,
        gallery: [imgRectangle37, imgRectangle34, imgRectangle36, imgRectangle38]
      },
      price: '18,000',
      buttonText: 'Reserve your family wing'
    },
    {
      id: 'bathroom01',
      title: 'Full bathroom 01',
      description: 'A complete bathroom with all modern amenities for your comfort.',
      details: [
        '• Body soap',
        '• Cleaning products',
        '• Conditioner',
        '• Hair dryer',
        '• Hot water',
        '• Shampoo',
        '• Shower gel'
      ],
      images: {
        main: imgRectangle27,
        gallery: [imgRectangle19, imgRectangle28]
      },
      price: '',
      buttonText: 'Book Full Bungalow'
    },
    {
      id: 'exterior',
      title: 'Full Bungalow',
      subtitle: '(Exterior)',
      description: 'Book the entire bungalow for ultimate privacy and freedom, perfect for larger groups or families.',
      details: [
        '• 2 Rooms',
        '• 2 Bathrooms',
        '• Full kitchen access',
        '• Air conditioning',
        '• Iron',
        '• Clothing storage',
        '• Washing machine',
        '• Extra pillows and blankets',
        '• Sleep up to 07'
      ],
      images: {
        main: imgRectangle41,
        gallery: [imgRectangle29, imgRectangle35, imgRectangle23]
      },
      price: '35,000',
      buttonText: 'Reserve your bungalow'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavigate={onNavigate} currentPage={currentPage} />
      <BookingForm onNavigate={onNavigate} />
      <PhotoTourSection targetSection={targetSection} />
      
      {roomData.map((room) => (
        <RoomSection
          key={room.id}
          id={room.id}
          title={room.title}
          subtitle={room.subtitle}
          description={room.description}
          details={room.details}
          images={room.images}
          price={room.price}
          buttonText={room.buttonText}
          onImageClick={handleImageClick}
          onNavigate={onNavigate}
        />
      ))}
      
      <FeelInspired />
      <Footer onNavigate={onNavigate} />
      
      <ImageModal 
        images={modalImages}
        isOpen={isModalOpen}
        currentIndex={currentImageIndex}
        onClose={handleModalClose}
        onNavigate={handleModalNavigate}
      />
    </div>
  );
}