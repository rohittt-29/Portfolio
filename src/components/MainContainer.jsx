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
 <div className='  px-4 py-3 '>
    <Card className="overflow-hidden bg-white dark:bg-black text-black dark:text-white rounded-2xl md:h-[90vh] p-0">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-fill"
  />

  <div className="px-4   text-center">
    <CardTitle className="text-2xl">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </div>

  <CardContent className="flex justify-center px-4 ">
    <div className="flex flex-wrap justify-center  p-2 w-4/5">
      {buttons?.map((tech ,index)=>(
        <Button key={index} variant="default" className={`m-2 `}>{tech}</Button>
      ))}
    </div>
  </CardContent>

  <CardFooter className="flex  pb-4 ">
    <a href={Git_link}><Button className="cursor-pointer" variant="outline"><i className="ri-github-line text-lg"></i>GitHub</Button></a>
  <a href={live_link}>  <Button className="cursor-pointer mx-4" variant="outline"><i className="ri-arrow-right-s-line  text-lg"></i> Live</Button></a>
  </CardFooter>
</Card>

    </div>
    </div>
  )
}


export default MainContainer
