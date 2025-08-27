import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SocialIcon } from './Icons';
import svgPaths from "../../imports/svg-4u3mehqz72";
import imgLogo1 from "/images/imgLogo1.png";

export default function Footer({ onNavigate }: { onNavigate: (page: string, section?: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { url: 'https://www.facebook.com/rukmalegedarabungalow/', icon: 'facebook' },
    { url: 'https://www.instagram.com/rukmale_gedara_bungalow/', icon: 'instagram' },
    { url: 'https://www.tiktok.com/@rukmale_gedara_bungalow', icon: 'tiktok' },
    { url: 'https://airbnb.com/h/rukmalegedarabungalow19', icon: 'airbnb' }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'facebook':
        return (
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
        );
      case 'instagram':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p3ef92200} fill="black" />
          </svg>
        );
      case 'tiktok':
        return (
          <svg className="block size-full" fill="black" viewBox="0 0 24 24">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.204-1.864-1.204-2.338v-.533h-2.764v13.349c0 1.835-1.499 3.334-3.334 3.334s-3.334-1.499-3.334-3.334 1.499-3.334 3.334-3.334c.348 0 .682.054 1 .153V8.887a6.054 6.054 0 0 0-1-.088c-3.404 0-6.167 2.763-6.167 6.167s2.763 6.167 6.167 6.167 6.167-2.763 6.167-6.167V9.624c.849.53 1.847.846 2.914.846.348 0 .682-.037 1-.106V7.781c-1.322 0-2.481-.681-3.15-1.714-.085-.131-.163-.264-.232-.4-.069-.136-.129-.274-.181-.414z"/>
          </svg>
        );
      case 'airbnb':
        return (
          <svg className="block size-full" fill="black" viewBox="0 0 24 24">
            <path d="M12 0C7.582 0 4 3.582 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.418-3.582-8-8-8zm0 11.5c-1.933 0-3.5-1.567-3.5-3.5S10.067 4.5 12 4.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/>
            <circle cx="12" cy="8" r="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="relative py-16 lg:py-24 px-4 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo and Title Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="w-[83.821px] h-[84px] mx-auto mb-4 cursor-pointer"
            style={{ backgroundImage: `url('${imgLogo1}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            onClick={() => onNavigate('home')}
          />
          <div className="font-['Outfit:Medium',_sans-serif] font-medium text-black text-[32px] lg:text-[40px]">
            Rukmale Gedara Bungalow
          </div>
        </motion.div>

        {/* Separator Lines */}
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Horizontal separator line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-black/20"></div>
          
          {/* Vertical separator line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-[280px] bg-black/20"></div>
        </motion.div>
        
        {/* Main Content Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Left Side - Navigation Links */}
          <div className="lg:pr-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { name: 'Home', key: 'home' },
                  { name: 'Accommodation', key: 'accommodation' },
                  { name: 'Booking', key: 'booking' }
                ].map((item) => (
                  <motion.div 
                    key={item.key}
                    className="font-['Outfit:Medium',_sans-serif] font-medium text-black text-[24px] lg:text-[28px] tracking-[1.12px] cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      color: "#333"
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => onNavigate(item.key)}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Photo Gallery', key: 'gallery' },
                  { name: 'About Us', key: 'about' },
                  { name: 'Contact Us', key: 'contact' }
                ].map((item) => (
                  <motion.div 
                    key={item.key}
                    className="font-['Outfit:Medium',_sans-serif] font-medium text-black text-[24px] lg:text-[28px] tracking-[1.12px] cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      color: "#333"
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => onNavigate(item.key === 'contact' ? 'about' : item.key)}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Information */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <div className="font-['Outfit:SemiBold',_sans-serif] font-semibold text-black text-[24px] lg:text-[28px] tracking-[1.12px] mb-2">
                Address
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[20px] lg:text-[24px] tracking-[0.96px]">
                2nd lane new city, Kottawa, Sri Lanka
              </div>
            </div>
            
            <div>
              <div className="font-['Outfit:SemiBold',_sans-serif] font-semibold text-black text-[24px] lg:text-[28px] tracking-[1.12px] mb-2">
                Contact
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[18px] lg:text-[20px] tracking-[0.8px] mb-2">
                +94713456764
              </div>
              <div className="font-['Outfit:Regular',_sans-serif] text-black text-[20px] lg:text-[24px]">
                reservations@ruhmakegedara.com
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center space-x-8 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleSocialClick(social.url)}
            >
              <SocialIcon>
                {renderSocialIcon(social.icon)}
              </SocialIcon>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}