import React from 'react';
import './Courses.css'

const Courses = ({course}) => {
    const {name, logo, total} = course;
    
    return (
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
           <div className="card card-compact w-96 bg-base-100">
            <figure><img className='ghgt' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
             <h2 className="card-title">{name}</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
             </div>
            </div>
            </div>
        </div>
    );
};

export default Courses;