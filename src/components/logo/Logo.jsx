import Link from "next/link";
import React from "react";
import { motion, spring } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="center-container-elements mt-2 z-10">
      <MotionLink
        href={`/`}
        className="center-container-elements w-16 h-16 bg-dark text-light dark:border-light border-2 border-solid border-transparent rounded-full text-2xl font-bold"
        whileHover={{
          scale: 1.2,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1.25, type: spring, repeat: Infinity },
        }}
      >
        <span className="text-light">NK</span>
      </MotionLink>
    </div>
  );
};

export default Logo;
