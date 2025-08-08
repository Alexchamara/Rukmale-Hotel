import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PlusCircle, HamburgerIcon, SocialIcon } from "./Icons";
import svgPaths from "../../imports/svg-4u3mehqz72";

// Dummy image placeholder
const imgLogo1 = "/images/imgLogo1.png";

function MobileMenu({
  isOpen,
  onClose,
  onNavigate,
  currentPage,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, section?: string) => void;
  currentPage: string;
}) {
  const navigationItems = [
    { name: "Home", key: "home" },
    { name: "Accommodation", key: "accommodation" },
    { name: "Gallery", key: "gallery" },
    { name: "About Us", key: "about" },
  ];

  const socialLinks = [
    {
      url: "https://www.facebook.com/rukmalegedarabungalow/",
      icon: "facebook",
    },
    {
      url: "https://www.instagram.com/rukmale_gedara_bungalow/",
      icon: "instagram",
    },
    { url: "https://www.tiktok.com/@rukmale_gedara_bungalow", icon: "tiktok" },
    { url: "https://airbnb.com/h/rukmalegedarabungalow19", icon: "airbnb" },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose();
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case "facebook":
        return (
          <svg
            className="block size-6"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 25"
          >
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
      case "instagram":
        return (
          <svg
            className="block size-6"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 25"
          >
            <path d={svgPaths.p3ef92200} fill="black" />
          </svg>
        );
      case "tiktok":
        return (
          <svg className="block size-6" fill="black" viewBox="0 0 24 24">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.204-1.864-1.204-2.338v-.533h-2.764v13.349c0 1.835-1.499 3.334-3.334 3.334s-3.334-1.499-3.334-3.334 1.499-3.334 3.334-3.334c.348 0 .682.054 1 .153V8.887a6.054 6.054 0 0 0-1-.088c-3.404 0-6.167 2.763-6.167 6.167s2.763 6.167 6.167 6.167 6.167-2.763 6.167-6.167V9.624c.849.53 1.847.846 2.914.846.348 0 .682-.037 1-.106V7.781c-1.322 0-2.481-.681-3.15-1.714-.085-.131-.163-.264-.232-.4-.069-.136-.129-.274-.181-.414z" />
          </svg>
        );
      case "airbnb":
        return (
          <svg className="block size-6" fill="black" viewBox="0 0 24 24">
            <path d="M12 0C7.582 0 4 3.582 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.418-3.582-8-8-8zm0 11.5c-1.933 0-3.5-1.567-3.5-3.5S10.067 4.5 12 4.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z" />
            <circle cx="12" cy="8" r="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Mobile Menu sliding from bottom */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
            style={{
              background: "transparent",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.15)",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1 bg-black/60 rounded-full" />
            </div>

            <div className="px-8 pb-8 bg-transparent">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <motion.button
                  className="text-black/70 hover:text-black text-2xl p-2 bg-white/30 rounded-full backdrop-blur-sm"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                >
                  ✕
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-6 mb-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    className={`font-['Outfit:SemiBold',_sans-serif] font-semibold text-black text-[24px] tracking-[0.96px] cursor-pointer text-center py-3 px-4 rounded-2xl backdrop-blur-sm ${
                      currentPage === item.key
                        ? "bg-white/40 border border-black/20 shadow-sm"
                        : "hover:bg-white/25 hover:border hover:border-black/10"
                    }`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.35)",
                      textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavigate(item.key)}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>

              {/* Booking Button */}
              <motion.div
                className="mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.div
                  className="bg-white/30 backdrop-blur-sm h-[50px] rounded-[25px] px-8 flex items-center justify-center cursor-pointer border border-black/20 shadow-sm"
                  whileHover={{
                    scale: 1.05,
                    background: "rgba(255,255,255,0.45)",
                    boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigate("booking")}
                >
                  <div className="font-['Outfit:SemiBold',_sans-serif] font-semibold text-black text-[18px] tracking-[0.72px] mr-3">
                    Booking
                  </div>
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="size-[25px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25 25"
                      >
                        <circle
                          cx="12.5"
                          cy="12.5"
                          r="11.5"
                          stroke="black"
                          strokeWidth="2"
                          fill="transparent"
                        />
                        <path
                          d="M12.5 8v9M8 12.5h9"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                className="flex justify-center space-x-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    className="size-[40px] bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-black/15"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialClick(social.url)}
                  >
                    {renderSocialIcon(social.icon)}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navigation({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: string, section?: string) => void;
  currentPage: string;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Add scroll listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background opacity based on scroll position
  // Starts at 0.6 opacity and increases to 0.95 as user scrolls
  const getBackgroundOpacity = () => {
    const maxScroll = 300; // Scroll distance to reach maximum opacity
    const minOpacity = 0.6; // Starting opacity
    const maxOpacity = 0.75; // Maximum opacity

    const scrollProgress = Math.min(scrollY / maxScroll, 1);
    return minOpacity + (maxOpacity - minOpacity) * scrollProgress;
  };

  const getBoxShadowIntensity = () => {
    const maxScroll = 200;
    const minIntensity = 0.5; // Starting shadow intensity
    const maxIntensity = 1; // Maximum shadow intensity

    const scrollProgress = Math.min(scrollY / maxScroll, 1);
    return minIntensity + (maxIntensity - minIntensity) * scrollProgress;
  };

  return (
    <>
      {/* Changed from absolute to fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          className="h-[78px] w-full transition-all duration-300 ease-out"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${getBackgroundOpacity()})`,
            boxShadow: `0px 2px 25px ${getBoxShadowIntensity()}px #000000`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Logo - Desktop centered, Mobile left */}
        <motion.div
          className="absolute left-4 lg:left-1/2 top-2.5 lg:transform lg:-translate-x-1/2 w-[58.874px] h-[59px] bg-center bg-cover bg-no-repeat cursor-pointer z-50"
          style={{ backgroundImage: `url('${imgLogo1}')` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          // whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ 
            duration: 0.3,
            type: "spring", 
            stiffness: 300
          }}
          onClick={() => {
            console.log("Logo clicked, navigating to home");
            onNavigate("home");
          }}
        />

        {/* Desktop Navigation Layout - Left links and Right links with center logo */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center px-8">
          {/* Left Navigation Links */}
          <motion.div
            className="flex space-x-12 mx-24"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { name: "Home", key: "home" },
              { name: "Accommodation", key: "accommodation" },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                className={`font-['Outfit:SemiBold',_sans-serif] font-semibold text-white text-[16px] tracking-[0.64px] cursor-pointer transition-all duration-200 ${
                  currentPage === item.key ? "opacity-100" : "opacity-80"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                  textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                }}
                onClick={() => onNavigate(item.key)}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Navigation Links */}
          <motion.div
            className="flex space-x-12 mx-24"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { name: "Gallery", key: "gallery" },
              { name: "About Us", key: "about" },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                className={`font-['Outfit:SemiBold',_sans-serif] font-semibold text-white text-[16px] tracking-[0.64px] cursor-pointer transition-all duration-200 ${
                  currentPage === item.key ? "opacity-100" : "opacity-80"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                  textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                }}
                onClick={() => onNavigate(item.key)}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Booking Button */}
        <motion.div
          className="hidden lg:block absolute right-4 lg:right-[50px] top-[27px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="h-[35px] rounded-[173px] px-5 flex items-center cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${Math.min(
                0.75 + scrollY * 0.0005,
                0.9
              )})`, // Cap the opacity
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0px 4px 15px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("booking")}
          >
            <div className="font-['Outfit:SemiBold',_sans-serif] font-semibold text-black text-[16px] tracking-[0.64px] mr-2">
              Booking
            </div>
            <PlusCircle />
          </motion.div>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <motion.div
          className="lg:hidden absolute right-4 top-[27px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HamburgerIcon isOpen={isMobileMenuOpen} />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
    </>
  );
}
