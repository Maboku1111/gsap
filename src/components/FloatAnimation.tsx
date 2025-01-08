/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { gsap } from "gsap";

const FloatAnimation = () => {
  useEffect(() => {
    gsap.to(".float", {
      duration: 1.5,
      y: 30, // Adjust this for the desired float height
      x: 60,
      opacity: 1,
      rotation: "random(-360, 360)",
      stagger: 0.1,
      ease: "power1.inOut",
      repeat: -1, // Repeat indefinetly
      yoyo: true, // Reverse the animation
    });
  }, []);
};

export default FloatAnimation;
