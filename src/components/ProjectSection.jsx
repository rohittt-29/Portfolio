import { DASH3_BG, STREAMVIVE_BG, TOGETHA_BG } from '@/util/constant'

import React from 'react'
import MainContainer from './MainContainer'
import { Button } from './ui/button'



    const  projects = [
        {
            title: "Togetha",
            description: "Togetha a Modern Dating real-time chat and connection platform. Built for fun interactions, profile swipes, and seamless chatting — all in one slick UI.",
            image: TOGETHA_BG,
            Git_link: "https://github.com/rohittt-29/togetha-ui",
            live_link: "https://togetha-web.vercel.app",
            buttons :[
                "React", "Redux" ,"Nodejs","MongoDB","Socket.Io", "ShadCN"
            ]
        },
              {
            title: "StreamVibe",
            description: "A sleek movie streaming platform built with React, Redux, and Firebase. It features real-time authentication, dynamic movie listings using TMDB API, and smart search powered by Gemini AI.",
            image: STREAMVIVE_BG,
            Git_link: "https://github.com/rohittt-29/StreamVibe",
                 live_link: "https://stream-vibe-20.vercel.app",
                        buttons :[
                "React", "Redux" ,"Tailwind","Firebase","TMDB API", "Gemini"
            ]

        },
                  {
            title: "Dash3",
            description: "DASH3 is a sleek, modern, and responsive crypto tracking web app that gives users a beautiful and intuitive way to view cryptocurrency prices, market stats, and trending coins — all in real-time. Built using React, Tailwind CSS, and Chart.js.",
            image: DASH3_BG,
            Git_link: "https://github.com/rohittt-29/dash-3",
                 live_link: "https://dash-3.netlify.app",
                            buttons :[
                "React","tailwind","Coingecko Api", "Chart.js"
            ]
        }
    ]
    const ProjectSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  p-2'>
      {projects.map((proj ,index)=>(
        <MainContainer key={index} title={proj.title}
          description={proj.description}
          image={proj.image}
          Git_link={proj.Git_link}
          live_link={proj.live_link}
          buttons={proj.buttons}
          
        />
      ))}
    </div>
  )
}

export default ProjectSection
