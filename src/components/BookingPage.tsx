import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { format, differenceInDays } from 'date-fns';
import type { DateRange } from 'react-day-picker';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';
import FeelInspired from './shared/FeelInspired';
import { Calendar } from './ui/calendar';
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

function BookingFormSection({ bookingData, selectedRoomType }: { 
  bookingData?: { checkIn: Date | undefined; checkOut: Date | undefined; guests: number },
  selectedRoomType?: string
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
    roomType: 'couple',
    message: ''
  });
  
  // Date range state for the calendar
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });

  // Track which date user is editing via summary (check-in or check-out)
  const [editingField, setEditingField] = useState<"checkIn" | "checkOut" | null>(null);
  // Control calendar visibility
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  // Auto-fill form with booking data from landing page
  useEffect(() => {
    const updates: Partial<typeof formData> = {};
    
    // Update check-in/check-out dates and guests if provided
    if (bookingData) {
      if (bookingData.checkIn) {
        updates.checkIn = format(bookingData.checkIn, 'yyyy-MM-dd');
        setDateRange(prev => ({ ...prev, from: bookingData.checkIn }));
      }
      
      if (bookingData.checkOut) {
        updates.checkOut = format(bookingData.checkOut, 'yyyy-MM-dd');
        setDateRange(prev => ({ ...prev, to: bookingData.checkOut }));
      }
      
      if (bookingData.guests) {
        updates.adults = bookingData.guests.toString();
      }
    }
    
    // Set room type if provided
    if (selectedRoomType) {
      updates.roomType = selectedRoomType;
    }

    if (Object.keys(updates).length > 0) {
      setFormData(prev => ({ ...prev, ...updates }));
    }
  }, [bookingData, selectedRoomType]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle date range selection
  const handleDateRangeChange = (range: DateRange | undefined) => {
    if (!range) return;
    // If editing via summary labels, we handle updates in onDayClick instead
    if (editingField) return;
    
    setDateRange({
      from: range.from,
      to: range.to
    });
    
    // Update form data with formatted dates
    if (range.from) {
      handleInputChange('checkIn', format(range.from, 'yyyy-MM-dd'));
    }
    
    if (range.to) {
      handleInputChange('checkOut', format(range.to, 'yyyy-MM-dd'));
    }
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

          {/* Check-in/Check-out Date */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px] pt-4">
              Select Dates:
            </label>
            <div className="lg:col-span-2">
              {/* Date range summary - moved above calendar */}
              <div
                className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-['Outfit:Light',_'Montserrat'] font-light text-[16px] border p-4 rounded-md bg-white/50"
                onClick={() => setShowCalendar(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowCalendar(true); } }}
                role="button"
                tabIndex={0}
              >
                <div
                  className="flex flex-col cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onClick={() => setEditingField('checkIn')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setEditingField('checkIn'); } }}
                >
                  <span className="text-black font-medium">Check-in</span>
                  <span className={`${dateRange.from ? 'text-black font-semibold' : 'text-black/50 italic'} ${editingField === 'checkIn' ? 'ring-2 ring-black/20 rounded px-1' : ''}`}>
                    {dateRange.from ? format(dateRange.from, 'EEE, MMM dd, yyyy') : 'Select start date'}
                  </span>
                </div>
                <div className="hidden sm:flex flex-col items-center">
                  <div className="h-8 w-px bg-black/10"></div>
                  {dateRange.from && dateRange.to && (
                    <div className="px-3 py-1 rounded-full bg-black/10 text-black text-sm mt-2 font-medium">
                      {differenceInDays(dateRange.to, dateRange.from)} {differenceInDays(dateRange.to, dateRange.from) === 1 ? 'night' : 'nights'}
                    </div>
                  )}
                </div>
                <div
                  className="flex flex-col cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onClick={() => setEditingField('checkOut')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setEditingField('checkOut'); } }}
                >
                  <span className="text-black font-medium">Check-out</span>
                  <span className={`${dateRange.to ? 'text-black font-semibold' : 'text-black/50 italic'} ${editingField === 'checkOut' ? 'ring-2 ring-black/20 rounded px-1' : ''}`}>
                    {dateRange.to ? format(dateRange.to, 'EEE, MMM dd, yyyy') : 'Select end date'}
                  </span>
                </div>
              </div>

              {showCalendar && (
              <Calendar
                mode="range"
                selected={{
                  from: dateRange.from,
                  to: dateRange.to
                }}
                onSelect={(range) => handleDateRangeChange(range)}
                onDayClick={(date) => {
                  if (!editingField) return;
                  if (editingField === "checkIn") {
                    const newFrom = date;
                    const currentTo = dateRange.to;
                    let newTo = currentTo;
                    // Ensure from <= to; if invalid, clear or adjust to
                    if (currentTo && currentTo < newFrom) {
                      newTo = undefined;
                    }
                    setDateRange({ from: newFrom, to: newTo });
                    handleInputChange('checkIn', format(newFrom, 'yyyy-MM-dd'));
                    if (!newTo) {
                      handleInputChange('checkOut', '');
                    }
                  } else if (editingField === "checkOut") {
                    const newTo = date;
                    const currentFrom = dateRange.from;
                    let newFrom = currentFrom;
                    // If no from yet, set same day as from to keep a valid range
                    if (!currentFrom) {
                      newFrom = newTo;
                    }
                    // Ensure from <= to; if invalid, clamp to from
                    const finalTo = newFrom && newTo < newFrom ? newFrom : newTo;
                    setDateRange({ from: newFrom, to: finalTo });
                    handleInputChange('checkOut', format(finalTo, 'yyyy-MM-dd'));
                    if (!newFrom) {
                      handleInputChange('checkIn', format(finalTo, 'yyyy-MM-dd'));
                    }
                  }
                  // Exit editing after applying a date
                  setEditingField(null);
                  // Keep calendar open so user can adjust the second date if needed
                }}
                numberOfMonths={2}
                className="mt-4 border-b border-black bg-white rounded-[3px]
                  [&_.rdp-button]:transition-colors
                  [&_.rdp-button]:duration-200
                  [&_.rdp-day]:hover:bg-transparent
                  [&_.rdp-cell]:hover:bg-transparent
                  [&_[data-range-start=true]]:!bg-black/70
                  [&_[data-range-end=true]]:!bg-black/70
                  [&_[data-range-start=true]]:!text-white
                  [&_[data-range-end=true]]:!text-white
                  [&_[data-range-middle=true]]:!bg-black/25
                  [&_[data-range-middle=true]]:!text-black
                  [&_[data-selected-single=true]]:!bg-black/70
                  [&_[data-selected-single=true]]:!text-white
                  [&_[data-range-start=true]]:hover:!bg-black/80
                  [&_[data-range-end=true]]:hover:!bg-black/80
                  [&_[data-range-middle=true]]:hover:!bg-black/30"
                classNames={{
                  today: "bg-transparent text-current",
                }}
                disabled={{ before: new Date() }}
                showOutsideDays={true}
              />)}
              {/* Inline helper when choosing specific date */}
              {showCalendar && (
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm font-['Outfit:Light',_'Montserrat'] text-black/70">
                    {editingField === 'checkIn'
                      ? 'Pick a check-in date on the calendar.'
                      : editingField === 'checkOut'
                        ? 'Pick a check-out date on the calendar.'
                        : 'Select a date range.'}
                  </div>
                  <button
                    type="button"
                    onClick={() => { setShowCalendar(false); setEditingField(null); }}
                    className="text-xs text-black/60 hover:text-black/80 underline underline-offset-2"
                  >
                    Hide calendar
                  </button>
                </div>
              )}
              
              {/* Hidden fields to store the values */}
              <input type="hidden" value={formData.checkIn} name="checkIn" />
              <input type="hidden" value={formData.checkOut} name="checkOut" />
            </div>
          </div>

          {/* Number of Guests */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
              Number of Guests:
            </label>
            <div className="lg:col-span-2 flex space-x-8">
              <div className="flex items-center gap-3">
                <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
                  Adults:
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="01"
                  value={formData.adults}
                  onChange={(e) => handleInputChange('adults', e.target.value)}
                  className="w-[141px] h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="font-['Outfit:Light',_'Montserrat'] font-light text-black text-[16px] tracking-[0.64px]">
                  Kids:
                </label>
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
            <div className="lg:col-span-2">
              <select
                value={formData.roomType}
                onChange={(e) => handleInputChange('roomType', e.target.value)}
                className="w-full h-[33px] px-3 rounded-[3px] border-b border-black bg-white font-['Outfit:Light',_'Montserrat'] font-light text-[14px] text-gray-500 tracking-[0.56px] focus:outline-none focus:border-black/70"
              >
                <option value="couple">Serenity Wing</option>
                <option value="family">Family Wing</option>
                <option value="bungalow">Full Bungalow</option>
              </select>
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

export default function BookingPage({ onNavigate, currentPage, bookingData, selectedRoomType }: { 
  onNavigate: (page: string, section?: string) => void; 
  currentPage: string;
  bookingData?: { checkIn: Date | undefined; checkOut: Date | undefined; guests: number };
  selectedRoomType?: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavigate={onNavigate} currentPage={currentPage} />
      <BookingFormSection bookingData={bookingData} selectedRoomType={selectedRoomType} />
      <FeelInspired />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}