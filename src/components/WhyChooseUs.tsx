"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { ImageResponse } from "next/server";



const content = [
    {
      title: "Live Jamming",
      description:
        "Jam in real-time with your bandmates and fellow musicians from anywhere. Sync up, share your groove, and create magic together without any delays. Our platform brings your music sessions to life, no matter the distance.",
      
    },
    {
      title: "Real-Time Track Adjustments",
      description:
        "Adjust your tracks as you go. Watch changes unfold in real-time, making it easy to refine every note, beat, and lyric. Keep everyone on the same page and ensure the music flows smoothly, avoiding the chaos of endless versions.",
        
      
    },
    {
      title: "Version Tracking",
      description:
        "Never lose track of your song versions again. Our platform keeps each version saved and easily accessible, so you can always return to the riff that sparked the magic or compare drafts before finalizing your track.",
    
    },
    {
      title: "Creative Inspiration",
      description:
        "Hit a creative wall? Access a library of beats, loops, and sample tracks to fuel your creativity. With our platform, running out of inspiration is a thing of the past.",
     
    },
  ];
  




const WhyChooseUs = () => {
  return (
    <>
        <StickyScroll contentClassName="  flex justify-center" content={content}/>
      
    </>
  )
}

export default WhyChooseUs
