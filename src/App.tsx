import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AccommodationPage from "./components/AccommodationPage";
import GalleryPage from "./components/GalleryPage";
import AboutUsPage from "./components/AboutUsPage";
import BookingPage from "./components/BookingPage";
import Navigation from "./components/shared/Navigation";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import Footer from "./components/shared/Footer";
import FeelInspired from "./components/shared/FeelInspired";
import svgPaths from "./imports/svg-4u3mehqz72";

import { Calendar } from "./components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";

const imgMain2 = "/images/imgMain2.png";
const imgIntro1 = "/images/imgIntro1.png";
const imgImg11 = "/images/cup1.JPG";
const imgImg12 = "/images/full1.JPG";
const imgImg2 = "/images/family1.JPG";
const img202410111 = "/images/cup3.JPG";
const img2024101141 = "/images/family3.JPG";
const img2024101121 = "/images/family2.JPG";
const img2024101131 = "/images/full2.JPG";

// function HeroSection({ onNavigate, currentPage }: { onNavigate: (page: string, section?: string) => void, currentPage: string }) {
//   const ref = useRef(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isReverse, setIsReverse] = useState(false);
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleVideoEnd = () => {
//       setIsReverse(prev => {
//         const newReverse = !prev;
//         if (newReverse) {
//           // Play in reverse: set currentTime to end and play backwards
//           video.currentTime = video.duration;
//           video.playbackRate = -1;
//         } else {
//           // Play forward: set currentTime to start and play forwards
//           video.currentTime = 0;
//           video.playbackRate = 1;
//         }
//         video.play();
//         return newReverse;
//       });
//     };

//     const handleTimeUpdate = () => {
//       if (isReverse && video.currentTime <= 0) {
//         handleVideoEnd();
//       } else if (!isReverse && video.currentTime >= video.duration) {
//         handleVideoEnd();
//       }
//     };

//     video.addEventListener('ended', handleVideoEnd);
//     video.addEventListener('timeupdate', handleTimeUpdate);
//     video.addEventListener('loadeddata', () => {
//       video.play();
//     });

//     return () => {
//       video.removeEventListener('ended', handleVideoEnd);
//       video.removeEventListener('timeupdate', handleTimeUpdate);
//       video.removeEventListener('loadeddata', () => {
//         video.play();
//       });
//     };
//   }, [isReverse]);

//   return (
//     <div ref={ref} className="relative h-[852px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
//       <motion.div
//         className="absolute inset-0"
//         style={{ y }}
//       >
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           src="/videos/intoVdo.mp4" // Replace with your video path
//           muted
//           playsInline
//           preload="auto"
//         />
//       </motion.div>

//       <Navigation onNavigate={onNavigate} currentPage={currentPage} />

//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="text-center text-white">
//           <motion.div
//             className="font-['Baskervville_SC:Regular',_sans-serif] text-[28px] lg:text-[40px] tracking-[6px] [text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] mb-2"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
//           >
//             Experience Nature in Luxury
//           </motion.div>
//           <motion.div
//             className="font-['Outfit:Light',_sans-serif] font-light text-[6px] lg:text-[8px] tracking-[4.16px]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
//           >
//             NOTES OF NIRVANA
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

function HeroSection({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: string, section?: string) => void;
  currentPage: string;
}) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReversing, setIsReversing] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (isReversing && video.currentTime <= 0) {
        // Finished playing in reverse, now play forward
        video.playbackRate = 0.5; // Slow motion forward
        video.currentTime = 0;
        setIsReversing(false);
        video.play().catch(() => setVideoError(true));
      }
    };

    const handleEnded = () => {
      if (!isReversing) {
        // Finished playing forward, now play in reverse
        video.playbackRate = -0.5; // Slow motion reverse
        video.currentTime = video.duration;
        setIsReversing(true);
        video.play().catch(() => setVideoError(true));
      }
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.currentTime = 0;
      video.playbackRate = 0.5; // Start with slow motion forward
      video.play().catch(() => setVideoError(true));
    };

    const handleError = () => {
      setVideoError(true);
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("error", handleError);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [isReversing]);

  return (
    <div
      ref={ref}
      className="relative h-[852px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        {!videoError && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
          >
            {/* <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" type="video/mp4" /> */}
            <source src="/videos/introVideo.mp4" type="video/mp4" />
          </video>
        )}

        {/* Fallback background image - shows when video fails or is loading */}
        <div
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
            videoError || !videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${imgMain2}')` }}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <Navigation onNavigate={onNavigate} currentPage={currentPage} />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.div
            className="font-['Baskervville_SC'] text-[28px] lg:text-[48px] tracking-[6px] [text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] mb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            Experience Nature in Luxury
          </motion.div>
          <motion.div
            className="font-['Outfit:Light',_Montserrat] font-light text-[6px] lg:text-[8px] tracking-[5.3px] absolute -mt-[65px] ml-[360px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          >
            OTES OF NIRVANA
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// function BookingForm({ onNavigate }: { onNavigate: (page: string, section?: string) => void }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       className="relative -mt-[50px] z-20 mx-4 lg:mx-[168px]"
//       initial={{ y: 100, opacity: 0 }}
//       animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <motion.div
//         className="bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 lg:p-8"
//         whileHover={{
//           boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
//           y: -5
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
//           <motion.div
//             className="flex items-center space-x-3"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="size-4">
//               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
//                 <path d={svgPaths.p2b81e400} fill="black" />
//               </svg>
//             </div>
//             <div>
//               <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-black text-[20px]">
//                 Check In
//               </div>
//               <div className="font-['Outfit:Regular',_sans-serif] text-black text-[12px]">
//                 2025-03-16
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="flex items-center space-x-3"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="size-4">
//               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
//                 <path d={svgPaths.p2b81e400} fill="black" />
//               </svg>
//             </div>
//             <div>
//               <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-black text-[20px]">
//                 Check Out
//               </div>
//               <div className="font-['Outfit:Regular',_sans-serif] text-black text-[12px]">
//                 2025-03-20
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="flex items-center space-x-3"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="size-[25px]">
//               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
//                 <path d={svgPaths.p3147b80} fill="black" />
//               </svg>
//             </div>
//             <div>
//               <div className="font-['Cormorant:SemiBold',_sans-serif] font-semibold text-black text-[20px]">
//                 Guest
//               </div>
//               <div className="font-['Outfit:Regular',_sans-serif] text-black text-[12px]">
//                 4 Guests
//               </div>
//             </div>
//           </motion.div>

//           <div>
//             <motion.button
//               className="bg-black/25 h-[53px] rounded-[50px] px-6 w-full"
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(0,0,0,0.35)",
//                 boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//               onClick={() => onNavigate('booking')}
//             >
//               <div className="font-['Cormorant:Bold',_sans-serif] font-bold text-black text-[20px]">
//                 Check Availability
//               </div>
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

function BookingForm({
  onNavigate,
  onBookingData,
}: {
  onNavigate: (page: string, section?: string) => void;
  onBookingData: (data: {
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState(4);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const handleCheckAvailability = () => {
    onBookingData({
      checkIn: dateRange.from,
      checkOut: dateRange.to,
      guests: guests,
    });
    onNavigate("booking");
  };

  return (
    <motion.div
      ref={ref}
      className="relative -mt-[50px] z-20 mx-4 lg:mx-[168px]"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 lg:p-8"
        whileHover={{
          boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
          y: -5,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Check In Date Picker */}
          <Popover open={isCheckInOpen} onOpenChange={setIsCheckInOpen}>
            <PopoverTrigger asChild>
              <motion.div
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="size-4">
                  <CalendarIcon className="size-4" />
                </div>
                <div>
                  <div className="font-['Cormorant:SemiBold',_Montserrat] font-semibold text-black text-[20px]">
                    Check In
                  </div>
                  <div className="font-['Outfit:Regular',_Montserrat] text-black text-[12px]">
                    {dateRange.from
                      ? format(dateRange.from, "yyyy-MM-dd")
                      : "Select date"}
                  </div>
                </div>
              </motion.div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateRange.from}
                onSelect={(date) => {
                  setDateRange((prev) => ({ ...prev, from: date }));
                  setIsCheckInOpen(false);
                }}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Check Out Date Picker */}
          <Popover open={isCheckOutOpen} onOpenChange={setIsCheckOutOpen}>
            <PopoverTrigger asChild>
              <motion.div
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="size-4">
                  <CalendarIcon className="size-4" />
                </div>
                <div>
                  <div className="font-['Cormorant:SemiBold',_Montserrat] font-semibold text-black text-[20px]">
                    Check Out
                  </div>
                  <div className="font-['Outfit:Regular',_Montserrat] text-black text-[12px]">
                    {dateRange.to
                      ? format(dateRange.to, "yyyy-MM-dd")
                      : "Select date"}
                  </div>
                </div>
              </motion.div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateRange.to}
                onSelect={(date) => {
                  setDateRange((prev) => ({ ...prev, to: date }));
                  setIsCheckOutOpen(false);
                }}
                disabled={(date) => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1);
                  return (
                    date < tomorrow ||
                    (dateRange.from ? date <= dateRange.from : false)
                  );
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Guest Selector */}
          <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
            <PopoverTrigger asChild>
              <motion.div
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="size-[25px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 25 25"
                  >
                    <path d={svgPaths.p3147b80} fill="black" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Cormorant:SemiBold',_Montserrat] font-semibold text-black text-[20px]">
                    Guest
                  </div>
                  <div className="font-['Outfit:Regular',_Montserrat] text-black text-[12px]">
                    {guests} {guests === 1 ? "Guest" : "Guests"}
                  </div>
                </div>
              </motion.div>
            </PopoverTrigger>
            <PopoverContent className="w-50" align="start">
              <div className="flex items-center justify-between">
                <div className="font-['Outfit:Medium',_Montserrat] font-medium text-black pr-2">
                  Guests
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                  <div className="w-8 text-center font-['Outfit:Medium',_Montserrat] font-medium">
                    {guests}
                  </div>
                  <motion.button
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    disabled={guests >= 10}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Check Availability Button */}
          <div>
            <motion.button
              className="bg-black/25 h-[53px] rounded-[50px] px-6 w-full"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0,0,0,0.35)",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={handleCheckAvailability}
            >
              <div className="font-['Cormorant:Bold',_Montserrat] font-bold text-black text-[20px]">
                Check Availability
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="py-16 lg:py-24 px-4 lg:px-[253px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <motion.div
          className="font-['Outfit:Regular',_Montserrat] text-black text-[16px] lg:text-[20px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A lifestyle revolution for a sustainable fulfilling future
        </motion.div>

        <motion.div
          className="w-full h-[300px] lg:h-[413px] rounded-[10px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] mb-8 overflow-hidden"
          style={{
            backgroundImage: `url('${imgIntro1}')`,
            backgroundPosition: "0.1% 48.19%",
            backgroundSize: "112.17% 140.19%",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
          }}
        />

        <motion.div
          className="font-['Outfit:Regular',_Montserrat] text-black text-[16px] lg:text-[20px] max-w-4xl mx-auto leading-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="mb-4">
            Welcome to Rukmale Gedara Bungalow Resort, where sustainable and
            luxury come together to create an unforgettable escape. Nested in
            the heat of pristine nature landscape.
          </p>
          <p>
            our resort is designed to harmonize with the environment while
            offering you a truly indulgent experience. From our solar-powered
            villa and eco-friendly amenities to organic farm-to-table dinning.
            every detail reflects our commitment to sustainability.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ImageCarousel({
  images,
  className,
}: {
  images: string[];
  className: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function RoomCard({
  images,
  title,
  description,
  rooms,
  beds,
  guests,
  amenities,
  price,
  buttonText,
  reverse = false,
  index = 0,
  onNavigate,
}: {
  images: string[];
  title: string;
  description: string;
  rooms: string;
  beds?: string;
  guests: string;
  amenities: string;
  price: string;
  buttonText: string;
  reverse?: boolean;
  index?: number;
  onNavigate: (page: string, section?: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookingClick = () => {
    onNavigate("booking");
  };

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 ${
        reverse ? "lg:grid-flow-col-dense" : ""
      }`}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }
      }
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`${reverse ? "lg:col-start-2" : ""}`}>
        <motion.div
          className="h-80 rounded-br-[50px] rounded-tl-[50px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)] overflow-hidden"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          <ImageCarousel images={images} className="w-full h-full" />
        </motion.div>
      </div>

      <motion.div
        className={`p-8 ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
      >
        <div className="font-['Outfit:SemiBold',_Montserrat] font-semibold text-black text-[24px] tracking-[0.96px] mb-4">
          {title}
        </div>

        <div className="font-['Outfit:Light',_Montserrat] font-light text-black text-[16px] tracking-[0.64px] mb-6">
          {description}
        </div>

        <div className="space-y-2 mb-6">
          <div className="font-['Outfit:Regular',_Montserrat] text-black text-[16px] tracking-[0.64px]">
            <span className="font-['Outfit:Bold',_Montserrat] font-bold">
              {rooms}
            </span>{" "}
            Room{" "}
            {beds && (
              <span>
                (
                <span className="font-['Outfit:Bold',_Montserrat] font-bold">
                  {beds}
                </span>{" "}
                double bed)
              </span>
            )}
          </div>
          <div className="font-['Outfit:Regular',_Montserrat] text-black text-[16px] tracking-[0.64px]">
            Sleeps up to{" "}
            <span className="font-['Outfit:Bold',_Montserrat] font-bold">
              {guests}
            </span>
          </div>
          <div className="font-['Outfit:Regular',_Montserrat] text-black text-[16px] tracking-[0.64px]">
            {amenities}
          </div>
        </div>

        <div className="font-['Outfit:Bold',_Montserrat] font-bold text-black text-[16px] tracking-[0.64px] mb-6">
          {price}
        </div>

        <motion.button
          className="bg-black/25 h-[46px] rounded-[50px] px-6 flex items-center space-x-4"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(0,0,0,0.35)",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={handleBookingClick}
        >
          <span className="font-['Outfit:SemiBold',_Montserrat] font-semibold text-black text-[16px] tracking-[0.64px]">
            {buttonText}
          </span>
          <motion.div
            className="w-10 h-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 41 8"
            >
              <path d={svgPaths.p17d56600} fill="black" />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function RoomsSection({
  onNavigate,
}: {
  onNavigate: (page: string, section?: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coupleWingImages = [imgImg11, imgIntro1, img202410111];
  const familyWingImages = [imgImg2, img2024101121, img2024101141];
  const fullBungalowImages = [imgImg12, img2024101131, imgMain2];

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
        <div className="font-['Outfit:Bold',_Montserrat] font-bold text-black text-[32px] lg:text-[40px] tracking-[1.6px] mb-4">
          Our Rooms
        </div>
        <div className="font-['Outfit:Regular',_Montserrat] text-black text-[16px] lg:text-[20px]">
          Discover our selection of inviting accommodations, designed for your
          comfort and relaxation.
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <RoomCard
          images={coupleWingImages}
          title="COUPLE WING"
          description="Intimate and cozy, ideal for couples seeking a peaceful getaway."
          rooms="1"
          beds="1"
          guests="2"
          amenities="A/C, Iron, Washing machine"
          price="LKR 12,000 / night"
          buttonText="BOOK YOUR ROOM"
          index={0}
          onNavigate={onNavigate}
        />

        <RoomCard
          images={familyWingImages}
          title="FAMILY WING"
          description="Perfectly designed for families or small groups looking for comfort and convenience."
          rooms="2"
          beds="2"
          guests="5"
          amenities="A/C, Iron, Washing machine"
          price="LKR 18,000 / night"
          buttonText="BOOK YOUR ROOM"
          reverse={true}
          index={1}
          onNavigate={onNavigate}
        />

        <RoomCard
          images={fullBungalowImages}
          title="FULL BUNGALOW"
          description="Book the entire bungalow for ultimate privacy and freedom—perfect for larger groups or families."
          rooms="Full access (all rooms + kitchen)"
          beds=""
          guests="7"
          amenities="Fully equipped kitchen, A/C, Ironing, Washing machine"
          price="LKR 35,000 / night"
          buttonText="BOOK YOUR BUNGALOW"
          index={2}
          onNavigate={onNavigate}
        />
      </div>
    </motion.div>
  );
}

// function LandingPage({
//   onNavigate,
//   currentPage,
// }: {
//   onNavigate: (page: string, section?: string) => void;
//   currentPage: string;
// }) {
//   return (
//     <div className="min-h-screen bg-white">
//       <HeroSection onNavigate={onNavigate} currentPage={currentPage} />
//       <BookingForm onNavigate={onNavigate} />
//       <IntroSection />
//       <RoomsSection onNavigate={onNavigate} />
//       <FeelInspired />
//       <Footer onNavigate={onNavigate} />
//     </div>
//   );
// }
function LandingPage({
  onNavigate,
  currentPage,
  onBookingData,
}: {
  onNavigate: (page: string, section?: string) => void;
  currentPage: string;
  onBookingData: (data: {
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => void;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation onNavigate={onNavigate} currentPage={currentPage} /> */}
      <HeroSection onNavigate={onNavigate} currentPage={currentPage} />
      <BookingForm onNavigate={onNavigate} onBookingData={onBookingData} />
      <IntroSection />
      <RoomsSection onNavigate={onNavigate} />
      <FeelInspired />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [targetSection, setTargetSection] = useState<string | undefined>(
    undefined
  );
  const [bookingData, setBookingData] = useState<{
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }>({
    checkIn: undefined,
    checkOut: undefined,
    guests: 4,
  });

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    setTargetSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookingData = (data: {
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => {
    setBookingData(data);
  };

  return (
    <>
      {currentPage === "home" && (
        <LandingPage
          onNavigate={handleNavigate}
          currentPage={currentPage}
          onBookingData={handleBookingData}
        />
      )}
      {currentPage === "accommodation" && (
        <div>
          <AccommodationPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
            onBookingData={handleBookingData}
          />
        </div>
      )}
      {currentPage === "gallery" && (
        <div>
          <GalleryPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
            targetSection={targetSection}
            onBookingData={handleBookingData}
          />
        </div>
      )}
      {currentPage === "about" && (
        <div>
          <AboutUsPage 
            onNavigate={handleNavigate} 
            currentPage={currentPage} 
            onBookingData={handleBookingData}
          />
        </div>
      )}
      {currentPage === "booking" && (
        <div>
          <BookingPage
            onNavigate={handleNavigate}
            currentPage={currentPage}
            bookingData={bookingData}
          />
        </div>
      )}
      <WhatsAppButton />
    </>
  );
}
