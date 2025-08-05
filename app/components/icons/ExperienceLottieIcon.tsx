"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import experienceAnimation from "../../../public/animations/experience.json";

export default function ExperienceLottieIcon() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isHovered, setIsHovered] = useState(false);

  const firstVisibleFrame = 60;

  useEffect(() => {
    lottieRef.current?.goToAndStop(firstVisibleFrame, true);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    lottieRef.current?.goToAndPlay(0, true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const animationDuration = lottieRef.current?.getDuration(true) || 60;
    lottieRef.current?.goToAndStop(animationDuration, true);
  };
  return (
    <div
      className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Lottie
        lottieRef={lottieRef}
        animationData={experienceAnimation}
        loop={false}
        autoPlay={false}
      />
    </div>
  );
}
