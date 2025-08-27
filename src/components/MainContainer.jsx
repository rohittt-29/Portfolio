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
import { Key } from 'lucide-react'
const MainContainer = ({title , description , image ,buttons,Git_link, live_link }) =>  {
  return (
    <div>
 <div className='  px-4  '>
    <Card className="overflow-hidden bg-white dark:bg-black text-black dark:text-white rounded-2xl  p-0">
<img
  src={image}
  alt={title}
  className="w-full h-60 md:h-[40vh] object-cover rounded-t-2xl"
/>


  <div className="px-4   text-center ">
    <CardTitle className="text-2xl">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </div>

  <CardContent className="flex justify-center px-4">
    <div className="flex flex-wrap justify-center gap-2 p-2 w-full">
      {buttons?.map((tech ,index)=>(
        <Button key={index} variant="default" className="text-xs sm:text-sm">{tech}</Button>
      ))}
    </div>
  </CardContent>

  <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center pb-4">
    <a href={Git_link}><Button className="cursor-pointer w-full sm:w-auto" variant="outline"><i className="ri-github-line text-lg"></i>GitHub</Button></a>
    <a href={live_link}><Button className="cursor-pointer w-full sm:w-auto" variant="outline"><i className="ri-arrow-right-s-line  text-lg"></i> Live</Button></a>
  </CardFooter>
</Card>

    </div>
    </div>
  )
}


export default MainContainer
