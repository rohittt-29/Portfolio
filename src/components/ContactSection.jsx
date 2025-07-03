import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from './ui/button'
import ParticleButton from './Particle'

const ContactSection = () => {
  return (
    <div>
       <div className="py-4">
      <Card className="bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md  mr-4 ml-4 md:ml-0">
        <CardHeader className=" text-center">
      
          <CardTitle className="text-3xl font-bold">Let's connect!
</CardTitle>
          <p className="text-muted-foreground text-lg">
      Have a project or just want to say hi?
          </p>
          <p className="text-muted-foreground text-sm mt-2">
  I’m open to freelance gigs, internships, or just a friendly tech chat over coffee ☕.
</p>

        </CardHeader>
        <CardContent className="mt-4 flex justify-center items-center p-4 w-full">
         <a href="mailto:rm2193352@gmail.com"><ParticleButton className={`py-6 px-6 cursor-pointer`}><i className="ri-mail-line text-xl"></i><span className='text-xl'>Contact me!</span></ParticleButton></a>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

export default ContactSection
