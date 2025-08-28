import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import FeelInspired from "./shared/FeelInspired";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { 
  ChevronUp, 
  ChevronDown, 
  CalendarIcon,
  Bath,
  Wind,
  Users,
  HomeIcon,
  Star
} from "lucide-react";
import svgPaths from "../imports/svg-edsdfkxck7";

// Dummy image placeholders
const imgMain = "/images/cup3.JPG";
const imgDsc050121 = "/images/family4.JPG";
const imgDsc50122 = "/images/cup4.JPG";
const imgDsc50123 = "/images/full3.JPG";

function HeroSection({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: string, section?: string) => void;
  currentPage: string;
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div
      ref={ref}
      className="relative h-[500px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[0%_16.18%] bg-no-repeat"
        style={{
          backgroundImage: `url('${imgMain}')`,
          backgroundSize: "100% 170.8%",
          y,
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
            Rooms & Rules
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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

function RoomCard({
  image,
  title,
  description,
  rooms,
  beds,
  bathrooms,
  amenities,
  price,
  sleeps,
  index,
  onNavigate,
}: {
  image: string;
  title: string;
  description: string;
  rooms: string;
  beds?: string;
  bathrooms: string;
  amenities: string;
  price: string;
  sleeps: string;
  index: number;
  onNavigate: (page: string, section?: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookingClick = () => {
    // Map room titles to gallery page sections
    let gallerySection;
    if (title === "FAMILY WING") {
      gallerySection = "bedroom02";
    } else if (title === "SERENITY WING") {
      gallerySection = "bedroom01";
    } else if (title === "FULL BUNGALOW") {
      gallerySection = "exterior";
    }
    
    // Navigate to the gallery page with the appropriate section
    onNavigate("gallery", gallerySection);
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-[25px] shadow-[0px_10px_25px_2px_rgba(0,0,0,0.25)] overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        y: -10,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      }}
    >
      <motion.div
        className="h-[291px] bg-center bg-cover bg-no-repeat rounded-[25px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] m-7"
        style={{ backgroundImage: `url('${image}')` }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />

      <div className="p-6">
        <div className="text-center mb-4">
          <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[24px] tracking-[0.96px] mb-4">
            {title}
          </div>
          <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[20px] mb-6">
            {description}
          </div>
        </div>

        <div className="mb-6 text-[16px] tracking-[0.64px]">
          <div className="grid grid-cols-2 gap-3">
            <motion.div 
              className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/5 rounded-full p-1.5 mr-3">
                <HomeIcon size={16} className="text-black/70" />
              </div>
              <span>
                <span className="font-['Outfit:Bold',_'Montserrat'] font-bold">
                  {rooms}
                </span>{" "}
                Room
                {beds && (
                  <span>
                    {" "}
                    (
                    <span className="font-['Outfit:Bold',_'Montserrat'] font-bold">
                      {beds}
                    </span>{" "}
                    dbl)
                  </span>
                )}
              </span>
            </motion.div>
            <motion.div 
              className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/5 rounded-full p-1.5 mr-3">
                <Bath size={16} className="text-black/70" />
              </div>
              <span>
                <span className="font-['Outfit:Bold',_'Montserrat'] font-bold">
                  {bathrooms}
                </span>{" "}
                Washroom
              </span>
            </motion.div>
            <motion.div 
              className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/5 rounded-full p-1.5 mr-3">
                <Wind size={16} className="text-black/70" />
              </div>
              <span>{amenities}</span>
            </motion.div>
            <motion.div 
              className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/5 rounded-full p-1.5 mr-3">
                <Users size={16} className="text-black/70" />
              </div>
              <span>
                Sleeps up to{" "}
                <span className="font-['Outfit:Bold',_'Montserrat'] font-bold">
                  {sleeps}
                </span>
              </span>
            </motion.div>
            <motion.div 
              className="col-span-2 font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/5 rounded-full p-1.5 mr-3">
                <Star size={16} className="text-black/70" />
              </div>
              <span>
                LKR{" "}
                <span className="font-['Outfit:Bold',_'Montserrat'] font-bold text-[24px] mx-1 bg-black/10 px-3 py-1 rounded-xl">
                  {price}/
                </span>
                night
              </span>
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <motion.button
            className="bg-black/25 h-[33px] rounded-[10px] px-6 shadow-[0px_0px_10px_0px_#000000]"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(0,0,0,0.35)",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={handleBookingClick}
          >
            <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[14px] tracking-[0.56px]">
              Book Now
            </div>
          </motion.button>
        </div>
      </div>
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
        <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[16px] lg:text-[20px] max-w-5xl mx-auto mb-16">
          Welcome to Rukmale Gedara Bungalow, your luxurious home away from
          home. Choose the accommodation that best suits your needs and enjoy a
          comfortable, relaxing stay.
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <RoomCard
            image={imgDsc050121}
            title="FAMILY WING"
            description="Perfectly designed for families or small groups looking for comfort and convenience."
            rooms="2"
            beds="2"
            bathrooms="1"
            amenities="A/C, Iron, Wash"
            price="18,000"
            sleeps="5"
            index={0}
            onNavigate={onNavigate}
          />

          <RoomCard
            image={imgDsc50122}
            title="SERENITY WING"
            description="Intimate and cozy, ideal for couples seeking a peaceful getaway."
            rooms="1"
            beds="1"
            bathrooms="1"
            amenities="A/C, Iron, Wash"
            price="12,000"
            sleeps="2"
            index={1}
            onNavigate={onNavigate}
          />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <motion.div
              className="bg-white rounded-[25px] shadow-[0px_10px_25px_2px_rgba(0,0,0,0.25)] overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                y: -10,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <motion.div
                className="h-[291px] bg-center bg-cover bg-no-repeat rounded-[25px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] m-7"
                style={{ backgroundImage: `url('${imgDsc50123}')` }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[24px] tracking-[0.96px] mb-4">
                    FULL BUNGALOW
                  </div>
                  <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[20px] mb-6">
                    Book the entire bungalow for ultimate privacy and freedom,
                    perfect for larger groups or families.
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-[16px] tracking-[0.64px]">
                  <motion.div 
                    className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-black/5 rounded-full p-1.5 mr-3">
                      <HomeIcon size={16} className="text-black/70" />
                    </div>
                    <span>Full access (all rooms + kitchen)</span>
                  </motion.div>
                  <motion.div 
                    className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-black/5 rounded-full p-1.5 mr-3">
                      <Wind size={16} className="text-black/70" />
                    </div>
                    <span>Full kitchen, A/C, ironing, washing machine</span>
                  </motion.div>
                  <motion.div 
                    className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-black/5 rounded-full p-1.5 mr-3">
                      <Users size={16} className="text-black/70" />
                    </div>
                    <span>Sleeps up to 7</span>
                  </motion.div>
                  <motion.div 
                    className="font-['Outfit:Light',_'Montserrat'] font-light text-black flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-black/5 rounded-full p-1.5 mr-3">
                      <Star size={16} className="text-black/70" />
                    </div>
                    <span>
                      LKR{" "}
                      <span className="font-['Outfit:Bold',_'Montserrat'] font-bold text-[24px] mx-1 bg-black/10 px-3 py-1 rounded-xl">
                        35,000/
                      </span>
                      night
                    </span>
                  </motion.div>
                </div>

                <div className="text-center">
                  <motion.button
                    className="bg-black/25 h-[33px] rounded-[10px] px-6 shadow-[0px_0px_10px_0px_#000000]"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(0,0,0,0.35)",
                      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => onNavigate("gallery", "exterior")}
                  >
                    <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[14px] tracking-[0.56px]">
                      Book Now
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto">
        <div className="h-px bg-black/10"></div>
      </div>
    </motion.div>
  );
}

export default function AccommodationPage({
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
      <HeroSection onNavigate={onNavigate} currentPage={currentPage} />
      <BookingForm onNavigate={onNavigate} onBookingData={onBookingData} />
      <RoomsSection onNavigate={onNavigate} />
      <FeelInspired />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
