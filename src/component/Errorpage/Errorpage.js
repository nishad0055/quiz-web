import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div className='text-center text-6xl font-bold py-10 px-10'>
            <h1>{error.status}</h1>
            {
                error && (<h1> {error.statusText || error.message}</h1>
                )
                
            }
            
        </div>
    );
};

export default Errorpage;