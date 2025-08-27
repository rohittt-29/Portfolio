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
import CommandButton from './kokonutui/command-button'
import TiltedCard from './TiltedCard';
import { ProfilrPhoto } from '@/util/constant';

const ProfileCard = () => {
  return (
    <div className=''>
      <Card className={` flex flex-col  bg-white dark:bg-black text-black dark:text-white ` }>
  <CardHeader className={`flex flex-col items-center`}>
    {/* <div className='w-30 h-30 border-2 border-gray-600 rounded-full'>
    <img className='rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.P9gmn-sHfrVuWkwWJmc_2wHaHa?pid=Api&P=0&h=180" alt="image" />
    </div> */}
    <TiltedCard
      imageSrc={ProfilrPhoto}
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Rohit Mali"
      containerHeight="100px"
      containerWidth="100px"
      imageHeight="100px"
      imageWidth="100px"
      rotateAmplitude={32}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      // overlayContent={
      //   <p className="tilted-card-demo-text">
      //    Rohit Mali
      //   </p>
      // }
    />
    <CardTitle className={`text-2xl`}>Rohit Mali</CardTitle>
    <CardDescription>FullStack Developer</CardDescription>
 
  </CardHeader>
  <CardContent className="flex justify-center">
    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
      <CommandButton className="text-xs sm:text-sm"><i className="ri-reactjs-fill mr-1 sm:mr-2"></i>React.js</CommandButton>
      <CommandButton className="text-xs sm:text-sm"><i className="ri-nodejs-fill mr-1 sm:mr-2"></i>Node.js</CommandButton>
      <CommandButton className="text-xs sm:text-sm">Express</CommandButton>
      <CommandButton className="text-xs sm:text-sm">MongoDb</CommandButton>
      <CommandButton className="text-xs sm:text-sm"><i className="ri-tailwind-css-fill mr-1 sm:mr-2"></i>Tailwind</CommandButton>
      <CommandButton className="text-xs sm:text-sm">Redux</CommandButton>
      <CommandButton className="text-xs sm:text-sm">Figma</CommandButton>
    </div>
                       
  </CardContent>
  <CardFooter className={`flex justify-center`}>
   <a href="/resume.pdf"
   target='_blank'
   rel="noopener noreferrer"><Button className={`cursor-pointer`} variant="outline"><i className="ri-attachment-2"></i>Resume</Button></a>
  </CardFooter>
</Card>
    </div>
  )
}

export default ProfileCard
