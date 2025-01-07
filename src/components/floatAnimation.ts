/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { gsap } from 'gsap';

const FloatAnimation = () => {
    useEffect(() => {
        gsap.to('', {
            duration: 1.5,
            y: 10, // Adjust this for the desired float height
            ease: "power1.inOut",
            repeat: -1, // Repeat indefinetly
            yoyo: true // Reverse the animation
        });
    }, [])
}

export default FloatAnimation;