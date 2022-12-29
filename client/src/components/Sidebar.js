import React from 'react';

// third-party packeges
import { Link, NavLink } from 'react-router-dom';

// icons
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

// images
import Logo from '../assets/images/snappy.png'

// active and non-active styles in sidebar
const isActiveStyle = 'flex items-center gap-2 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';
const isNotActiveStyle = 'flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'

// Demo Categories

const categories = [
    { name: 'Animals'},
    { name: 'Wallpapers'},
    { name: 'Photography'},
    { name: 'Gaming'},
    { name: 'Coding'},
]

const Sidebar = ({ user, closeToggle }) => {

    const handleCloseSidebar = () => {
        console.log("clicked");
        if (closeToggle) closeToggle(false);
    }


    return (
        <div className='pl-5 pt-5 flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar '>
            <div className='flex flex-col gap-5'>
                <Link 
                    to='/' onClick={handleCloseSidebar} className='z-10'
                >
                    <img src={Logo} alt='logo' className='w-24' />
                </Link>
                <NavLink
                    to={'/'}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}

                >
                    <RiHomeFill />
                    Home
                </NavLink>

                <h3 className="mt-2 text-base 2xl:text-xl">Discover Categories</h3>
                {
                    categories.map((category) => (
                        <NavLink
                            to={`categories/${category.name}`}
                            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                            onClick={handleCloseSidebar}
                        >
                            {category.name}
                        </NavLink>
                    ))
                }

            </div>
        </div>
    );
};

export default Sidebar;