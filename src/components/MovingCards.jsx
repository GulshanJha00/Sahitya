"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 




const testimonials = [
  {
    quote:
      "It was the best of grooves, it was the worst of beats, it was the age of harmony, it was the age of dissonance, it was the rhythm of belief, it was the syncopation of doubt. Music lit the season, yet silence shadowed the score.",
    name: "Charlie D.",
    title: "A Tale of Two Tracks",
  },
  {
    quote:
      "To play, or not to play, that is the question: Whether it’s nobler to jam through the rough notes, or to take a break, reset, and let the music find you again. To rest, to revive.",
    name: "Will S.",
    title: "Sonata of Reflection",
  },
  {
    quote:
      "All that we play or feel is but a note within a song, a melody within a dream.",
    name: "Edgar A. Poe",
    title: "Dreams of Sound",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a musician with a great sound is always in search of the perfect band.",
    name: "Jane A.",
    title: "Notes and Harmonies",
  },
  {
    quote:
      "Call me Solo. Some years ago—never mind how many gigs—having little to no crowd, and nothing particularly melodic in mind, I thought I’d hit the road and find the music in every corner of the world.",
    name: "Herman M.",
    title: "Road to Rhythm",
  },
];



const MovingCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex-col items-center justify-center overflow-hidden" >
      <h2 className="text-3xl font-bold text-center mb-8 mt-36 z-10">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      </div>
      

    </div>
  )
}

export default MovingCards
