import React from 'react';
import  { useState, useEffect, useRef } from 'react';

// third-party packeges
import { Link,  Routes, Route } from 'react-router-dom';

// icons
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

// images
import Logo from '../assets/images/snappy.png';

// components
import { Sidebar, UserProfile } from '../components';
import Pins from './Pins';

// query to getdata from sanity
import { userQuery } from '../utils/sanity';
import { client } from '../client';


const Home = () => {

    // states to mange sidebar and user that is logged in
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState(null);

    // get the user info we have set at the login time - provide userId from this this sanity to get the user
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    // everytime the page loads it will fetch the user and set user state to the logged in user
    useEffect(() => {
      // query coming from utils cause we might have need the same query in other components  
      const query = userQuery(userInfo?.sub);
      // making request to sanity with the id to get the user document and set to the user state
      client.fetch(query)
        .then((data) => {
            setUser(data[0])
        })

    }, [])
    

    return (
        <div className='flex bg-gray-50 md:flex-row flex-col transition duration-75 ease-out'>
            <div className='hidden md:flex'>
                <Sidebar />
            </div>

            <div className='flex md:hidden'>
                <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)}/>
                <Link to={'/'}>
                    <img src={Logo} alt='logo' className='w-24'/>
                </Link>
                <Link to={`user-profile/${user?._id}`}>
                    <img src={user?.image} alt='logo' className='w-24'/>
                </Link>
            </div>
        </div>
    );
};

export default Home;