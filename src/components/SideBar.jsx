import React from 'react'
import ProfileCard from './Profilecard'
import ContactCard from './ContactCard'
import SocialButton from './SocialLink'
import MainContainer from './MainContainer'

const SideBar = () => {
  return (
    <div className=''>
    <div>
      <ProfileCard />
      <ContactCard />
      <SocialButton />
      <div>
  
      </div>
    </div>
    </div>
  )
}

export default SideBar
