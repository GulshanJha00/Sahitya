'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';





const projects = [
    {
      title: "SoundWave",
      description:
        "A platform that builds the future of digital music distribution, connecting artists directly with listeners worldwide.",
      link: "https://soundwave.com",
    },
    {
      title: "StreamBeat",
      description:
        "A streaming service offering a vast collection of music, live concert recordings, artist documentaries, and exclusive interviews, all accessible on your devices.",
      link: "https://streambeat.com",
    },
    {
      title: "TuneHub",
      description:
        "A music-focused tech company specializing in tools and resources for musicians, including tutorials, collaboration spaces, and recording software.",
      link: "https://tunehub.com",
    },
    {
      title: "GrooveLab",
      description:
        "A social network for musicians that enables collaboration, live jamming sessions, and a community-driven approach to music production.",
      link: "https://groovelab.com",
    },
    {
      title: "HarmonyCloud",
      description:
        "A tech company specializing in cloud-based music production tools, enabling artists to create, mix, and share music from anywhere.",
      link: "https://harmonycloud.com",
    },
    {
      title: "RhythmWorks",
      description:
        "A company that develops and sells software, hardware, and digital services for musicians, offering everything from digital instruments to music production software.",
      link: "https://rhythmworks.com",
    },
  ];
  







const Webinar = () => {
  return (
    <div className='p-12 bg-gray-900'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center'>
            <h2 className='uppercase text-base text-teal-600 font-semibold tracking-wide'>Featured Webinar</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
        </div>








        <div className='mt-10'>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>









        <div className='mt-20 text-center '>
                <Link href={"/courses"}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            View all courses
                        </span>
                    </button>
                </Link>

            </div>
      </div>
    </div>
  )
}

export default Webinar
