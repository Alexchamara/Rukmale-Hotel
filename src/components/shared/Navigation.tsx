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
      case "instagram":
        return (
          <svg className="block size-full" fill="black" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg className="block size-full" fill="black" viewBox="0 0 24 24">
            <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.204-1.864-1.204-2.338v-.533h-2.764v13.349c0 1.835-1.499 3.334-3.334 3.334s-3.334-1.499-3.334-3.334 1.499-3.334 3.334-3.334c.348 0 .682.054 1 .153V8.887a6.054 6.054 0 0 0-1-.088c-3.404 0-6.167 2.763-6.167 6.167s2.763 6.167 6.167 6.167 6.167-2.763 6.167-6.167V9.624c.849.53 1.847.846 2.914.846.348 0 .682-.037 1-.106V7.781c-1.322 0-2.481-.681-3.15-1.714-.085-.131-.163-.264-.232-.4-.069-.136-.129-.274-.181-.414z"/>
          </svg>
        );
      case "airbnb":
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
                    className={`font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[24px] tracking-[0.96px] cursor-pointer text-center py-3 px-4 rounded-2xl backdrop-blur-sm ${
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
                  <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[18px] tracking-[0.72px] mr-3">
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
                    <div className="scale-125">
                      <SocialIcon>
                        {renderSocialIcon(social.icon)}
                      </SocialIcon>
                    </div>
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
                className={`font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-white text-[16px] tracking-[0.64px] cursor-pointer transition-all duration-200 ${
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
                className={`font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-white text-[16px] tracking-[0.64px] cursor-pointer transition-all duration-200 ${
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
            <div className="font-['Outfit:SemiBold',_'Montserrat'] font-semibold text-black text-[16px] tracking-[0.64px] mr-2">
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
