import React from 'react'
import ThemeToggle from './ThemeToggle'

  import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import DynamicText from './DynamicText';
import { Link } from 'react-router-dom';
import ProfileCard from './Profilecard';
import ContactCard from './ContactCard';
import SocialButton from './SocialLink';


// update with your own items




const Navbar = () => {
  return (
    <div className='flex flex-col'>
    <div className="p-4 flex justify-between bg-white dark:bg-black text-black dark:text-white border-b-2 transition-colors duration-300">
        <div>
     <h1 className='cursor-pointer text-2xl'>Rohit Mali</h1>
</div>
<div>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link to='/home' >
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      </Link>
      <Link to='/about'>
      <NavigationMenuTrigger>About</NavigationMenuTrigger>
      </Link>
      <Link to='/contact'>
      <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
   </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
</div>
{/* <div>
    <DynamicText/>
</div> */}
<div className='mr-5'>
   <ThemeToggle/>
      </div>
 
    </div>
         <div>   
        
            <ProfileCard/>
      <ContactCard/>
      <SocialButton/></div>
    </div>
  )
}

export default Navbar
