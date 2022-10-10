import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto'>
            <h1 className='text-3xl font-bold'>Quzzo</h1>
            <ul className='flex'>
                <li className='p-4'> <Link>Home</Link> </li>
                <li className='p-4'> <Link>Statistics</Link> </li>
                <li className='p-4'> <Link>Blog</Link> </li>
            </ul>
        </div>
    );
};

export default Navbar;