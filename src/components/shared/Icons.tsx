import { motion } from 'framer-motion';
import svgPaths from "../../imports/svg-4u3mehqz72";

export function PlusCircle() {
  return (
    <motion.div 
      className="size-4"
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_23)">
          <path
            d={svgPaths.p228b1080}
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_23">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

export function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div className="size-6 cursor-pointer">
      <svg className="size-full" fill="none" viewBox="0 0 24 24">
        <motion.path
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          d="M4 6h16"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          d="M4 12h16"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          d="M4 18h16"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </motion.div>
  );
}

export function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      className="size-[25px] cursor-pointer"
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.3))"
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}