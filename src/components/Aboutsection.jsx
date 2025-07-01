import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DynamicText from './DynamicText'
const Aboutsection = () => {
 return (
     <div className=' py-4'>
       <Card className="flex flex-col mr-5 bg-white dark:bg-black text-black dark:text-white p-4">
         <CardHeader>
           <CardContent className={`w-1/6  `}><DynamicText/></CardContent>
           {/* <CardTitle className={`text-2xl`}>I’m Rohit Mali </CardTitle> */}
         </CardHeader>

         <CardContent className=" ">
          I’m Rohit Mali — just another curious mind trying to make the web a little more usable, fast, and beautiful.

I’m currently pursuing Computer Engineering from Mumbai University, but most of what I’ve learned comes from building things that break — and fixing them at 2AM (the real dev life™).

My comfort zone? Building full-stack apps with React, Node.js, Express, and MongoDB — and giving them a visual soul using Figma and Shadcn/UI. I enjoy the sweet spot where code meets design — not just making things work, but making them feel right.

Lately, I’ve been sharpening my problem-solving skills with DSA, and focusing on writing cleaner, reusable, and scalable code.

Outside of code, I enjoy simplifying complex ideas and obsessing over the tiny UI details that make a big difference.
         </CardContent>
       </Card>
     </div>
   )
 }
 

export default Aboutsection
