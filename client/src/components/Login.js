import React from 'react';

import loginBg from '../assets/videos/login-bg.mp4';
import snappyLogo from '../assets/images/snappy-logo.png';

const Login = () => {
    return (
        <div className='flex flex-col justify-start items-center h-screen'>
            <div className='relative h-full w-full'>
                <video 
                src={loginBg}
                autoPlay
                muted
                loop
                controls={false}
                type='video/mp4'
                className='w-full h-full object-cover'
                />
            </div>

            <div className='absolute h-full w-full top-0 bottom-0 right-0 left-0 bg-blackOverlay flex justify-center items-center'>
                <div>
                    <img src={snappyLogo} className='h-8'/>
                </div>
            </div>
        </div>
    );
};

export default Login;
