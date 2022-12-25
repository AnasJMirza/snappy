import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { client } from '../client';

import loginBg from '../assets/videos/login-bg.mp4';
import snappyLogo from '../assets/images/snappy-logo.png';

const Login = () => {

    const navigate = useNavigate();

    // handle response from google oAuth letest package

    const createOrGetUser = (response) => {

        // decode the credential coming from google oAuth package because in letest package, you can not get image, name etc

        const decoded = jwtDecode(response.credential);

        // set the credential to local storage of browser to get them later in other components

        localStorage.setItem('user', JSON.stringify(decoded));

        // distructing the object to get needed information

        const { name, picture, sub } = decoded;

        // creating a doc to send to sanity backend

        const doc = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture,
        }

        // client file is a config file used for connection the FE with Sanity
        
        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', { replace: true });
            })
        
    }

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
                    onSuccess={(response) => createOrGetUser(response)}    
                    onError={()=> console.log('error')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
