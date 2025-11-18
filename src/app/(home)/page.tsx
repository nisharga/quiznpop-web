"use client"
import React from "react"; 
import { AboutUs, AppScreen, DownloadApp, Faqs, Features, HeroArea, HowToPlay, 
    Overview, SupportBy, Testimonial } from "./components"; 
import { motion, useScroll } from "motion/react" 

function Home() {
    const { scrollYProgress } = useScroll()
    return (
        <div>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#a670ed",
                    zIndex: 100
                }}
            />
            <HeroArea />
            <SupportBy />
            <Features /> 
            <HowToPlay /> 
            <AboutUs /> 
            <AppScreen /> 
            <Testimonial /> 
            <Faqs /> 
            <DownloadApp /> 
            <Overview />  
        </div>
    );
}

export default Home;
