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
import emailjs from '@emailjs/browser';

const imgLogo1 = "/images/imgLogo1.png";
const img202410112 = "/images/full4.JPG";
// import imgScreenshot20250522At100232Am1 from "./assets/images/imgIntro1.png";

function HeroSection({ onNavigate, currentPage }: { onNavigate: (page: string, section?: string) => void, currentPage: string }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] xl:h-[852px]">
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
            Welcome to Rukmale Gedara Bungalow
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
            className="hidden sm:flex justify-center mt-6 lg:mt-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <motion.div 
                className="sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px] mx-auto mb-4 bg-center bg-cover bg-no-repeat rounded-[230px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.55)] border border-[rgba(0,0,0,0.25)]"
                style={{ backgroundImage: `url('${imgLogo1}')` }}
                // whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
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

            <div className="space-y-6 font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] leading-relaxed lg:text-justify">
              <p>
                Welcome to Rukmale Gedara Bungalow, where nature meets luxury to create unforgettable experiences. Situated amidst lush greenery and tranquil surroundings, our bungalow is more than just a place to stay—it's your sanctuary to relax, rejuvenate, and reconnect.
              </p>
              
              <p>
                At Rukmale Gedara, we pride ourselves on blending traditional hospitality with contemporary comforts. Our beautifully appointed rooms, carefully designed amenities, and warm, attentive service ensure every moment of your stay is special.
              </p>
              
              <p>
                Our bungalow embraces sustainable practices to minimize our environmental impact, reflecting our deep respect for nature and commitment to preserving the beauty of our surroundings for future generations.
              </p>
              
              <p>
                Come, experience the true essence of relaxation and create lasting memories at Rukmale Gedara Bungalow.
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const missing: string[] = [];
    if (!formData.name.trim()) missing.push('Name');
    if (!formData.email.trim()) missing.push('Email');
    if (!formData.message.trim()) missing.push('Message');
    if (missing.length) {
      setStatusMsg({ type: 'error', text: `Please fill: ${missing.join(', ')}` });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  // Use a dedicated contact template so booking emails and general enquiries are separated
  const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMsg({ type: 'error', text: 'Email service is not configured. Please set VITE_EMAILJS_* env variables.' });
      return;
    }

    const templateParams = {
      to_email: 'ireshm19@gmail.com',
      subject: 'New enquiry from About page',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || '-',
      message: formData.message,
      submitted_at: new Date().toLocaleString(),
      form_type: 'contact',
      summary: `General inquiry from About page\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || '-'}\n\nMessage:\n${formData.message}`,
    } as Record<string, unknown>;

    try {
      setSending(true);
      setStatusMsg(null);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatusMsg({ type: 'success', text: "Thanks! Your message has been sent. We'll get back to you soon." });
      // Optional: clear fields
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('EmailJS send error:', err);
      setStatusMsg({ type: 'error', text: 'Failed to send your message. Please try again later or contact us directly.' });
    } finally {
      setSending(false);
    }
  };

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
            We'd love to hear from you! Whether you have questions about our accommodations, need assistance with your booking, or simply want to learn more about Rukmale Gedara Bungalow, we're here to help.
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
                  reservations@rukmalegedara.com
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
                  <svg className="block size-full" fill="black" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
                  <svg className="block size-full" fill="none" stroke="black" strokeWidth="3" viewBox="0 0 32 32">
                    <path d="M29.524 22.279c-0.372-1.044-0.752-1.907-1.183-2.74l0.058 0.123v-0.038c-2.361-5.006-4.551-9.507-6.632-13.551l-0.139-0.204c-1.483-3.040-2.544-4.866-5.627-4.866-3.049 0-4.344 2.118-5.667 4.871l-0.101 0.2c-2.086 4.044-4.275 8.551-6.627 13.555v0.066l-0.699 1.525c-0.262 0.63-0.396 0.96-0.431 1.058-0.279 0.691-0.441 1.492-0.441 2.332 0 3.526 2.859 6.385 6.385 6.385 0.020 0 0.040-0 0.060-0l-0.003 0c0.117-0 0.232-0.012 0.342-0.036l-0.011 0.002h0.465c2.744-0.574 5.073-2.061 6.71-4.121l0.018-0.024c1.656 2.082 3.983 3.568 6.65 4.132l0.075 0.013h0.465c0.099 0.021 0.214 0.034 0.331 0.034h0c0.017 0 0.038 0 0.059 0 3.526 0 6.384-2.858 6.384-6.384 0-0.84-0.162-1.642-0.457-2.376l0.015 0.043zM16.001 23.841c-1.367-1.544-2.407-3.411-2.991-5.47l-0.024-0.099c-0.126-0.348-0.198-0.749-0.198-1.167 0-0.711 0.21-1.372 0.57-1.927l-0.008 0.014c0.543-0.803 1.45-1.325 2.479-1.325 0.060 0 0.12 0.002 0.18 0.005l-0.008-0c0.052-0.003 0.112-0.005 0.173-0.005 1.030 0 1.938 0.525 2.469 1.323l0.007 0.011c0.351 0.538 0.56 1.196 0.56 1.904 0 0.422-0.074 0.826-0.211 1.201l0.008-0.024c-0.624 2.155-1.661 4.019-3.029 5.588l0.015-0.017z"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
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
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
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
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
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
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
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
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-3 py-2 rounded-[3px] border border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70 resize-none"
              />
            </div>

            {/* Send Button */}
            <motion.button 
              type="submit"
              disabled={sending}
              aria-busy={sending}
              className={`bg-black/25 h-[33px] rounded-[10px] px-6 shadow-[0px_0px_10px_0px_#000000] ${sending ? 'opacity-60 cursor-not-allowed' : ''}`}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(0,0,0,0.35)",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[14px] tracking-[0.56px]">
                {sending ? 'Sending…' : 'Send Message'}
              </div>
            </motion.button>
            {statusMsg && (
              <div className={`text-sm ${statusMsg.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {statusMsg.text}
              </div>
            )}
          </motion.form>
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