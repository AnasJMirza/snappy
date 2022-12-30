import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Spinner from './Spinner';

const Feed = () => {

    const [loader, setLoader] = useState(false);
    const { categoryId } = useParams();



    // useEffect(() => {
    //     setLoader(true);
    //     if(categoryId) {
    //         const query = searchQuery(categoryId);
    //     } else {

    //     }
    // }, [categoryId])
    

    return (
        <div>
            {
                loader && (
                    <Spinner message='We are adding new ideas to your feed!'/>
                )
            }
        </div>
    );
};

export default Feed;