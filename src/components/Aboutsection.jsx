import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import DynamicText from './DynamicText'
import { Button } from './ui/button'
import CommandButton from './kokonutui/command-button'


const Aboutsection = () => {
  return (
    <>
    <div className="py-4">
      <Card className="bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md p-6 mr-4 ml-4 md:ml-0 ">
        <CardHeader className="space-y-2 text-center">
          <CardContent className="p-0">
            <DynamicText />
            

          </CardContent>
          <CardTitle className="text-3xl font-bold">I’m Rohit Mali</CardTitle>
          <p className="text-muted-foreground text-sm">
            Full Stack Developer • Web Craftsman
          </p>
        </CardHeader>

        <CardContent className="mt-4 space-y-4 text-[16px] leading-relaxed tracking-wide text-justify">
          <p>
            I’m a full stack developer who loves building interactive, scalable, and user-focused web apps. Whether it’s crafting a responsive frontend or setting up a clean backend API — I enjoy being part of the whole journey.
          </p>

          <p>
            I work mainly with React, Node.js, Express, and MongoDB — pairing them with clean UI libraries like Shadcn/UI and Figma to create smooth interfaces. While I’m not a professional UI designer, I enjoy making things look and feel right.
          </p>

          <p>
            I constantly learn by doing — breaking things, fixing them, and improving along the way. Every project helps me get better at thinking, building, and shipping.
          </p>

          <p>
            Currently, I’m expanding my skills into areas like TypeScript, PostgreSQL, and better architectural practices to write cleaner and more maintainable codebases.
          </p>
        </CardContent>
      </Card>
    </div>
     <div className=' pb-4 '>
          <Card className="flex flex-col  bg-white dark:bg-black text-black dark:text-white p-4 ml-4 md:ml-0 mr-4">
            <CardHeader>
              <CardTitle>Technologies I’ve Worked With</CardTitle>
            </CardHeader>
    
            <CardContent className={` pb-4 flex flex-wrap justify-center gap-4`}>
       
              <CommandButton><i className="ri-reactjs-fill mr-2"></i>React.js</CommandButton>
                <CommandButton><i className="ri-nodejs-fill mr-2"></i>Node.js</CommandButton>
                  <CommandButton>Express</CommandButton>
                    <CommandButton>MongoDb</CommandButton>
                      <CommandButton>Socket.Io</CommandButton>
                        <CommandButton><i className="ri-tailwind-css-fill mr-2"></i>Tailwind</CommandButton>
                          <CommandButton>Redux</CommandButton>
                            <CommandButton><i className="ri-figma-line mr-2"></i>Figma</CommandButton>
                             <CommandButton><i className="ri-vercel-line mr-2"></i>Vercel</CommandButton>
                              <CommandButton>Git</CommandButton>
                               <CommandButton>Zustand</CommandButton>
          
            </CardContent>
          </Card>
        </div>
    </>
  )
}

export default Aboutsection
