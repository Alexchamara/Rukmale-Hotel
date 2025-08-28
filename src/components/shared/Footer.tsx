import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SocialIcon } from './Icons';
import svgPaths from "../../imports/svg-4u3mehqz72";
import imgLogo1 from "/images/imgLogo1.png";
import { MapPin, Phone, Mail } from 'lucide-react';

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
          <svg className="block size-full" fill="black" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
          <svg className="block size-full" fill="none" stroke="black" strokeWidth="3" viewBox="0 0 32 32">
            <path d="M29.524 22.279c-0.372-1.044-0.752-1.907-1.183-2.74l0.058 0.123v-0.038c-2.361-5.006-4.551-9.507-6.632-13.551l-0.139-0.204c-1.483-3.040-2.544-4.866-5.627-4.866-3.049 0-4.344 2.118-5.667 4.871l-0.101 0.2c-2.086 4.044-4.275 8.551-6.627 13.555v0.066l-0.699 1.525c-0.262 0.63-0.396 0.96-0.431 1.058-0.279 0.691-0.441 1.492-0.441 2.332 0 3.526 2.859 6.385 6.385 6.385 0.020 0 0.040-0 0.060-0l-0.003 0c0.117-0 0.232-0.012 0.342-0.036l-0.011 0.002h0.465c2.744-0.574 5.073-2.061 6.71-4.121l0.018-0.024c1.656 2.082 3.983 3.568 6.65 4.132l0.075 0.013h0.465c0.099 0.021 0.214 0.034 0.331 0.034h0c0.017 0 0.038 0 0.059 0 3.526 0 6.384-2.858 6.384-6.384 0-0.84-0.162-1.642-0.457-2.376l0.015 0.043zM16.001 23.841c-1.367-1.544-2.407-3.411-2.991-5.47l-0.024-0.099c-0.126-0.348-0.198-0.749-0.198-1.167 0-0.711 0.21-1.372 0.57-1.927l-0.008 0.014c0.543-0.803 1.45-1.325 2.479-1.325 0.060 0 0.12 0.002 0.18 0.005l-0.008-0c0.052-0.003 0.112-0.005 0.173-0.005 1.030 0 1.938 0.525 2.469 1.323l0.007 0.011c0.351 0.538 0.56 1.196 0.56 1.904 0 0.422-0.074 0.826-0.211 1.201l0.008-0.024c-0.624 2.155-1.661 4.019-3.029 5.588l0.015-0.017z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="relative py-12 lg:py-16 px-4 lg:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo and Title Section */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="w-[70px] h-[70px] mx-auto mb-3 cursor-pointer"
            style={{ backgroundImage: `url('${imgLogo1}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            onClick={() => onNavigate('home')}
          />
          <div className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black text-[24px] lg:text-[32px]">
            Rukmale Gedara Bungalow
          </div>
        </motion.div>

        {/* Separator Lines */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Horizontal separator line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-black/20"></div>
          
          {/* Vertical separator line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-[220px] bg-black/20"></div>
        </motion.div>
        
        {/* Main Content Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Left Side - Navigation Links */}
          <div className="lg:pr-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  { name: 'Home', key: 'home' },
                  { name: 'Accommodation', key: 'accommodation' },
                  { name: 'Booking', key: 'booking' }
                ].map((item) => (
                  <motion.div 
                    key={item.key}
                    className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black text-[18px] lg:text-[20px] tracking-[0.8px] cursor-pointer"
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
              <div className="space-y-4">
                {[
                  { name: 'Photo Gallery', key: 'gallery' },
                  { name: 'About Us', key: 'about' },
                  { name: 'Contact Us', key: 'contact' }
                ].map((item) => (
                  <motion.div 
                    key={item.key}
                    className="font-['Outfit:Medium',_'Montserrat'] font-medium text-black text-[18px] lg:text-[20px] tracking-[0.8px] cursor-pointer"
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
          <div className="space-y-6 lg:pl-8">
            <div>
              <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[18px] lg:text-[20px] tracking-[0.8px] mb-1 flex items-center">
                Address
              </div>
              <a 
                href="https://www.google.com/maps/place/Rukmale+gedara+Bungalow/@6.8660816,79.9777524,17z/data=!3m1!4b1!4m9!3m8!1s0x3ae25165844e35fb:0x38b9c762179d9546!5m2!4m1!1i2!8m2!3d6.8660816!4d79.9777524!16s%2Fg%2F11scykh613?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Outfit:Regular',_'Montserrat'] text-black text-[16px] lg:text-[18px] tracking-[0.72px] hover:text-gray-600 transition-colors flex items-center pl-6"
              >
                <MapPin className="w-4 h-4 mr-2" />
                2nd lane new city, Kottawa, Sri Lanka
              </a>
            </div>
            
            <div>
              <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[18px] lg:text-[20px] tracking-[0.8px] mb-1 flex items-center">
                {/* <Phone className="w-4 h-4 mr-2" /> */}
                Contact
              </div>
              <a 
                href="tel:+94713456764" 
                className="font-['Outfit:Regular',_'Montserrat'] text-black text-[16px] lg:text-[18px] tracking-[0.72px] mb-1 hover:text-gray-600 transition-colors flex items-center pl-6"
              >
                <Phone className="w-3 h-3 mr-2 opacity-70" />
                +94713456764
              </a>
              <a 
                href="mailto:reservations@rukmalegedara.com" 
                className="font-['Outfit:Regular',_'Montserrat'] text-black text-[16px] lg:text-[18px] hover:text-gray-600 transition-colors flex items-center pl-6"
              >
                <Mail className="w-3 h-3 mr-2 opacity-70" />
                reservations@rukmalegedara.com
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center space-x-6 pt-6"
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