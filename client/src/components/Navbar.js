import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

// icons
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({searchTerm, setSearchTerm, user}) => {

    const navigate = useNavigate();
    if (!user) return null;


    return (
        <div className='flex flex-row justify-between items-center md:m-3 m-1 md:gap-3 gap-1 animate-slide-in'>
            <div className='flex items-center gap-2 bg-white w-full p-3 rounded'>
                <IoMdSearch fontSize={20}/>
                <input 
                type={'text'}
                placeholder='Search'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                onFocus={() => navigate('/search')}
                className='bg-white outline-none'
                />
            </div>
            <Link to={`/user-profile/${user?._id}`} className='cursor-pointer hidden md:block'>
                <img src={user?.image} alt='user' className='w-12 rounded'/>
            </Link>
            <Link to={`/create-pin`} className='bg-black text-white w-12 p-3 rounded flex justify-center items-center'>
                <IoMdAdd fontSize={20}/>
            </Link>
        </div>
    );
};

export default Navbar;