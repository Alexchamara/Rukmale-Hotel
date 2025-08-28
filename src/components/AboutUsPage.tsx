import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';
import FeelInspired from './shared/FeelInspired';
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Calendar } from './ui/calendar';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { CalendarIcon } from 'lucide-react';
import svgPaths from "../imports/svg-dhbv1x4h7x";

const imgLogo1 = "/images/imgLogo1.png";
const img202410112 = "/images/full4.JPG";
// import imgScreenshot20250522At100232Am1 from "./assets/images/imgIntro1.png";

function HeroSection({ onNavigate, currentPage }: { onNavigate: (page: string, section?: string) => void, currentPage: string }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div ref={ref} className="relative h-[852px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url('${img202410112}')`,
          y
        }}
      />
      
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.div 
            className="font-['Baskervville_SC'] text-[28px] lg:text-[40px] tracking-[6px] [text-shadow:rgba(0,0,0,0.5)_0px_4px_2px] mb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            Welcome to Ruhmake Gedara Bungalow
          </motion.div>
        </div>
      </div>

      {/* Large Logo Section */}
      {/* <motion.div
        className="absolute left-[191px] top-[625px] w-[302px] h-[303px] rounded-[159.5px] bg-center bg-cover bg-no-repeat shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] border border-[rgba(0,0,0,0.25)]"
        style={{ backgroundImage: `url('${imgLogo1}')` }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      /> */}
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
      className="relative -mt-[50px] z-20 mx-4 lg:mx-[162px]"
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
                  <div className="font-['Cormorant:SemiBold',_'Montserrat'] font-semibold text-black text-[20px]">
                    Check In
                  </div>
                  <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[12px]">
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
                  <div className="font-['Cormorant:SemiBold',_'Montserrat'] font-semibold text-black text-[20px]">
                    Check Out
                  </div>
                  <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[12px]">
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
                  <div className="font-['Cormorant:SemiBold',_'Montserrat'] font-semibold text-black text-[20px]">
                    Guest
                  </div>
                  <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[12px]">
                    {guests} {guests === 1 ? "Guest" : "Guests"}
                  </div>
                </div>
              </motion.div>
            </PopoverTrigger>
            <PopoverContent className="w-50" align="start">
              <div className="flex items-center justify-between">
                <div className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black pr-2">
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
                  <div className="w-8 text-center font-['Outfit:Medium',_'Montserrat'] font-medium">
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
              <div className="font-['Cormorant:Bold',_'Montserrat'] font-bold text-black text-[20px]">
                Check Availability
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WelcomeSection() {
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Logo Section */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <motion.div 
                className="w-[84px] h-[84px] mx-auto mb-4 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${imgLogo1}')` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black text-[32px] lg:text-[40px]">
                Rukmale Gedara Bungalow
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[32px] lg:text-[40px] tracking-[4px] mb-6">
                WELCOME
              </div>
              <div className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black text-[20px] lg:text-[24px] tracking-[0.96px] mb-4">
                About Us
              </div>
            </div>

            <div className="space-y-6 font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] leading-relaxed">
              <p>
                Welcome to Ruhmake Gedara Bungalow, where nature meets luxury to create unforgettable experiences. Situated amidst lush greenery and tranquil surroundings, our bungalow is more than just a place to stay—it's your sanctuary to relax, rejuvenate, and reconnect.
              </p>
              
              <p>
                At Ruhmake Gedara, we pride ourselves on blending traditional hospitality with contemporary comforts. Our beautifully appointed rooms, carefully designed amenities, and warm, attentive service ensure every moment of your stay is special.
              </p>
              
              <p>
                Our bungalow embraces sustainable practices to minimize our environmental impact, reflecting our deep respect for nature and commitment to preserving the beauty of our surroundings for future generations.
              </p>
              
              <p>
                Come, experience the true essence of relaxation and create lasting memories at Ruhmake Gedara Bungalow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="h-px bg-black/10"></div>
      </div>
    </motion.div>
  );
}

function GetInTouchSection() {
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
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[32px] lg:text-[40px] tracking-[4px] mb-8">
            GET IN TOUCH
          </div>
          <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[16px] lg:text-[20px] max-w-4xl mx-auto">
            We'd love to hear from you! Whether you have questions about our accommodations, need assistance with your booking, or simply want to learn more about Ruhmake Gedara Bungalow, we're here to help.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[20px] lg:text-[24px] tracking-[0.96px] mb-6">
                Contact Us
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="size-[25px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <g clipPath="url(#clip0_30_379)">
                      <path d={svgPaths.p381fbb00} fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_379">
                        <rect fill="white" height="25" width="25" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
                  +94713456764
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="size-[25px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <g clipPath="url(#clip0_30_371)">
                      <path d={svgPaths.p140d0380} fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_371">
                        <rect fill="white" height="25" width="25" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
                  reservations@ruhmakegedara.com
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="size-[25px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <g clipPath="url(#clip0_30_376)">
                      <path d={svgPaths.p3550e200} fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_376">
                        <rect fill="white" height="25" width="25" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
                  2nd lane new city, Kottawa, Sri Lanka
                </div>
              </div>

              {/* Reception */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="size-[25px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
                    <path d={svgPaths.p366fbf00} fill="black" />
                  </svg>
                </div>
                <div className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
                  Available 24/7
                </div>
              </div>
            </div>

            {/* Connect with Us */}
            <div>
              <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[20px] lg:text-[24px] tracking-[0.96px] mb-4">
                Connect with Us
              </div>
              <div className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] mb-6">
                Follow us on social media to stay updated with the latest news and special offers:
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.facebook.com/rukmalegedarabungalow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-[25px] cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <g clipPath="url(#clip0_1_13)">
                      <path d={svgPaths.p29f54000} fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_13">
                        <rect fill="white" height="25" width="25" />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.instagram.com/rukmale_gedara_bungalow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-[25px] cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <path d={svgPaths.p3ef92200} fill="black" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.tiktok.com/@rukmale_gedara_bungalow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-[25px] cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="block size-full" fill="black" viewBox="0 0 24 24">
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.204-1.864-1.204-2.338v-.533h-2.764v13.349c0 1.835-1.499 3.334-3.334 3.334s-3.334-1.499-3.334-3.334 1.499-3.334 3.334-3.334c.348 0 .682.054 1 .153V8.887a6.054 6.054 0 0 0-1-.088c-3.404 0-6.167 2.763-6.167 6.167s2.763 6.167 6.167 6.167 6.167-2.763 6.167-6.167V9.624c.849.53 1.847.846 2.914.846.348 0 .682-.037 1-.106V7.781c-1.322 0-2.481-.681-3.15-1.714-.085-.131-.163-.264-.232-.4-.069-.136-.129-.274-.181-.414z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://airbnb.com/h/rukmalegedarabungalow19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-[25px] cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="block size-full" fill="black" viewBox="0 0 24 24">
                    <path d="M12 0C7.582 0 4 3.582 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.418-3.582-8-8-8zm0 11.5c-1.933 0-3.5-1.567-3.5-3.5S10.067 4.5 12 4.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/>
                    <circle cx="12" cy="8" r="2"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Name Field */}
            <div>
              <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] mb-2 block">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] mb-2 block">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] mb-2 block">
                Phone (Optional):
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] mb-2 block">
                Message:
              </label>
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full px-3 py-2 rounded-[3px] border border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70 resize-none"
              />
            </div>

            {/* Send Button */}
            <motion.button 
              className="bg-black/25 h-[33px] rounded-[10px] px-6 shadow-[0px_0px_10px_0px_#000000]"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(0,0,0,0.35)",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[14px] tracking-[0.56px]">
                Send Message
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-full h-[390px] rounded-[25px] overflow-hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] border border-[rgba(0,0,0,0.25)]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2044905090834!2d79.97517747515711!3d6.866081593132526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25165844e35fb%3A0x38b9c762179d9546!2sRukmale%20gedara%20Bungalow!5e0!3m2!1sen!2slk!4v1754332189059!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[25px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Separator Line */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="h-px bg-black/10"></div>
      </div>
    </motion.div>
  );
}

export default function AboutUsPage({
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
      <WelcomeSection />
      <GetInTouchSection />
      <FeelInspired />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}