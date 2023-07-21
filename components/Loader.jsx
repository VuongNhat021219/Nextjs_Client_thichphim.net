import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#ffffff",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "-100%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 1,
  repeat: Infinity, // Để animation chạy mãi mãi
  repeatType: "reverse", // Đảo ngược hướng di chuyển sau mỗi lần lặp
  ease: "easeInOut", // Kiểu chuyển đổi easing
};

const Loader = () => {
  return (
    <div>
      <div className="fixed  w-full min-h-screen z-10000000 bg-black opacity-30" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          animate="end"
          initial="start"
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
