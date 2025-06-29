import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ContactCard = () => {
  return (
    <div className='w-full md:w-1/4 px-4'>
      <Card className="flex flex-col bg-white dark:bg-black text-black dark:text-white p-4">
        <CardHeader>
          <CardTitle>Contact Info:</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 py-2">
          <div className="flex items-center gap-2">
            <i className=" ri-mail-line " />
            <span>rm2193352@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <i className="ri-map-pin-2-line" />
            <span>Mumbai, India</span>
          </div>

          <div className="flex items-center gap-2">
            <i className="ri-calendar-line" />
            <span>Available for Hire</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactCard
