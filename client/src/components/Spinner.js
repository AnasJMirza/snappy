import React from 'react';

import {TailSpin} from 'react-loader-spinner';

const Spinner = ({ message }) => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-96'>
            <TailSpin
            height="80"
            width="80"
            color="#00bfff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />

            <p className='font-bold text-gray-500'>{message}</p>
        </div>
    );
};

export default Spinner;