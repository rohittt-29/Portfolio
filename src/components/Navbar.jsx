import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import ParticleButton from './Particle';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '@/util/constant';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const isActive = (path) => currentPath === path;

  const getButtonStyle = (path) => {
    return isActive(path)
      ? "bg-black text-white dark:bg-white dark:text-black" // active = filled
      : "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"; // inactive = outline
  };

  return (
    <div className="p-2 md:p-4 flex justify-between items-center bg-white dark:bg-black text-black dark:text-white  transition-colors duration-300">
      <img  onClick={()=>{    if (window.innerWidth < 768) {
      navigate('/');
    }}} src={LOGO} className='w-7 h-7 md:w-10 md:h-10' alt="" />

      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <Link to='/home'>
              <ParticleButton className={`mx-1 cursor-pointer ${getButtonStyle('/home')}`}>
                Projects
              </ParticleButton>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to='/about'>
              <ParticleButton className={`mx-1 cursor-pointer ${getButtonStyle('/about')}`}>
                About
              </ParticleButton>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to='/contact'>
              <ParticleButton className={`mx-1 cursor-pointer ${getButtonStyle('/contact')}`}>
                Contact
              </ParticleButton>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ThemeToggle />
    </div>
  );
};

export default Navbar;
