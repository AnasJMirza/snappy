import React from 'react';

import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

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

            <div className='absolute h-full w-full top-0 bottom-0 right-0 left-0 bg-blackOverlay flex flex-col justify-center items-center'>
                <div className='p-5'>
                    <img src={snappyLogo} className='h-8'/>
                </div>
                <div>
                    <GoogleLogin 
                    clientId=''
                    render={(renderProps) => (
                        <button
                        type='button'
                        className='bg-mainColor flex items-center justify-around gap-2 p-2 rounded-lg cursor-pointer outline-none'
                        >
                            <FcGoogle /> Sign in With Google
                        </button>
                    )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
