import React from 'react';
import { ThreeCircles } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <ThreeCircles
                visible={true}
                height="60"
                width="60"
                color="#3c65f5"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;