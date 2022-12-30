import React from 'react';
import { useState } from 'react';

// third-party packeges
import { Routes, Route } from 'react-router-dom';

// components
import { Navbar, Feed, CreatePin, PinDetail, Search } from '../components';

const Pins = ({ user }) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <div>
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user} />
            </div>
            <div className='md:m-3 m-1'>
                <Routes>
                    <Route path='/' element={<Feed />}/>
                    <Route path='/category/:categoryId' element={<Feed />}/>
                    <Route path='/pin-detail/:pinId' element={<PinDetail user={user} />}/>
                    <Route path='/create-pin' element={<CreatePin user={user}/>} />
                    <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}/>
                </Routes>
            </div>
        </div>
    );
};

export default Pins;