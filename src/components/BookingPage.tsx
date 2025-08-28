import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { format } from 'date-fns';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';
import FeelInspired from './shared/FeelInspired';
import svgPaths from "../imports/svg-ziizrqf333";
import imgDsc05036 from "../assets/cup4.jpg";

function HeroSection({ onNavigate, currentPage }: { onNavigate: (page: string, section?: string) => void, currentPage: string }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div ref={ref} className="relative h-[500px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url('${imgDsc05036}')`,
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
            Reserve Your Room
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function BookingFormSection({ bookingData }: { 
  bookingData?: { checkIn: Date | undefined; checkOut: Date | undefined; guests: number } 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    adults: '1',
    kids: '0',
    roomType: 'standard',
    wholeBungalow: false,
    message: ''
  });

  // Auto-fill form with booking data from landing page
  useEffect(() => {
    if (bookingData) {
      const updates: Partial<typeof formData> = {};
      
      if (bookingData.checkIn) {
        updates.checkIn = format(bookingData.checkIn, 'yyyy-MM-dd');
      }
      
      if (bookingData.checkOut) {
        updates.checkOut = format(bookingData.checkOut, 'yyyy-MM-dd');
      }
      
      if (bookingData.guests) {
        updates.adults = bookingData.guests.toString();
      }

      if (Object.keys(updates).length > 0) {
        setFormData(prev => ({ ...prev, ...updates }));
      }
    }
  }, [bookingData]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div 
      ref={ref}
      className="py-16 lg:py-24 px-4 lg:px-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[32px] lg:text-[40px] tracking-[4px] mb-8">
            BOOK YOUR STAY
          </div>
          <div className="font-['Outfit:Regular',_'Montserrat'] text-black text-[20px] max-w-4xl mx-auto mb-8">
            We're delighted you're considering Rukmale Gedara Bungalow for your next getaway. Fill out the form below to request your reservation. We will confirm your booking shortly after receiving your details.
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Name Field */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Name:
            </label>
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Phone:
            </label>
            <div className="lg:col-span-2">
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Email:
            </label>
            <div className="lg:col-span-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Check-in Date:
            </label>
            <div className="lg:col-span-2 relative">
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
              <div className="absolute right-3 top-1.5 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p85e9000} fill="rgba(99,99,99,0.5)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Check-out Date */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Check-out Date:
            </label>
            <div className="lg:col-span-2 relative">
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              />
              <div className="absolute right-3 top-1.5 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p85e9000} fill="rgba(99,99,99,0.5)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Number of Guests */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Number of Adults:
            </label>
            <div className="lg:col-span-2 flex space-x-8">
              <div className="flex flex-col">
                <input
                  type="number"
                  min="1"
                  placeholder="01"
                  value={formData.adults}
                  onChange={(e) => handleInputChange('adults', e.target.value)}
                  className="w-[141px] h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] mb-2">
                  Number of Kids:
                </span>
                <input
                  type="number"
                  min="0"
                  placeholder="00"
                  value={formData.kids}
                  onChange={(e) => handleInputChange('kids', e.target.value)}
                  className="w-[141px] h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
                />
              </div>
            </div>
          </div>

          {/* Room Type */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Room Type:
            </label>
            <div className="lg:col-span-2 flex items-center space-x-8">
              <select
                value={formData.roomType}
                onChange={(e) => handleInputChange('roomType', e.target.value)}
                className="w-[137px] h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              >
                <option value="standard">Standard</option>
                <option value="couple">Serenity Wing</option>
                <option value="family">Family Wing</option>
                <option value="bungalow">Full Bungalow</option>
              </select>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="wholeBungalow"
                  checked={formData.wholeBungalow}
                  onChange={(e) => handleInputChange('wholeBungalow', e.target.checked)}
                  className="w-[33px] h-[33px] rounded-[3px] border-2 border-black"
                />
                <label 
                  htmlFor="wholeBungalow"
                  className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]"
                >
                  Book Whole Bungalow
                </label>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Your Message:
            </label>
            <div className="lg:col-span-2">
              <textarea
                placeholder="Any specific requirements or preferences"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <motion.button 
              type="submit"
              className="bg-black/25 h-[33px] rounded-[10px] px-12 shadow-[0px_0px_10px_0px_#000000]"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(0,0,0,0.35)",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-['Outfit:Bold',_'Montserrat'] font-bold text-black text-[14px] tracking-[0.56px]">
                Send Reservation Request
              </div>
            </motion.button>
          </div>

          {/* Footer Note */}
          <motion.div 
            className="text-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black text-[16px] max-w-4xl mx-auto">
              <p className="mb-2">
                Upon submission, we'll contact you directly to finalize your booking details.
              </p>
              <p>
                Thank you for choosing Rukmale Gedara Bungalow. We look forward to welcoming you soon!
              </p>
            </div>
          </motion.div>
        </motion.form>
      </div>

      {/* Separator Line */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="h-px bg-black/10"></div>
      </div>
    </motion.div>
  );
}

export default function BookingPage({ onNavigate, currentPage, bookingData }: { 
  onNavigate: (page: string, section?: string) => void; 
  currentPage: string;
  bookingData?: { checkIn: Date | undefined; checkOut: Date | undefined; guests: number };
}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavigate={onNavigate} currentPage={currentPage} />
      <BookingFormSection bookingData={bookingData} />
      <FeelInspired />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}