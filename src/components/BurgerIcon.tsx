"use client";
import { motion, Transition } from "framer-motion";

interface BurgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({
  isOpen,
  onClick,
  color = "white",
}) => {
  const transition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 2200,
        position: "relative",
      }}
      aria-label="Menü umschalten"
    >
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        animate={isOpen ? "open" : "closed"}
        initial={false}
      >
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          transition={transition}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke={color}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          transition={transition}
        />
      </motion.svg>
    </button>
  );
};

export default BurgerIcon;
