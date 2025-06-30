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
const MainContainer = () =>  {
  return (
    <div>
 <div className='  px-4 py-3 '>
      <Card className={` flex flex-col w-2/3  bg-white dark:bg-black text-black dark:text-white ` }>
  <CardHeader className={`flex flex-col items-center`}>
    <div className='w-30 h-30 border-5 border-white rounded-full'>
    <img className='rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.P9gmn-sHfrVuWkwWJmc_2wHaHa?pid=Api&P=0&h=180" alt="image" />
    </div>
    <CardTitle className={`text-2xl`}>Rohit Mali</CardTitle>
    <CardDescription>FullStack Developer</CardDescription>
 
  </CardHeader>
  <CardContent className={`flex justify-center `}>
    <div className='flex flex-wrap justify-center'>
    <Button className={`m-1 `} variant="default">React</Button>
        <Button className={`m-1`} variant="default">Node.js</Button>
            <Button className={`m-1`} variant="default">Express</Button>
                <Button className={`m-1`} variant="default">MongoDb</Button>
                    <Button className={`m-1`} variant="default">Shadcn</Button>
                        <Button className={`m-1`} variant="default">Figma</Button>
                        </div>
                       
  </CardContent>
  <CardFooter className={`flex justify-center`}>
   <Button className={`cursor-pointer`} variant="outline">Resume</Button>
  </CardFooter>
</Card>
    </div>
    </div>
  )
}


export default MainContainer
