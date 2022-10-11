import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'

const Courses = ({course}) => {
    const {name, logo, total,id} = course;
    
    return (
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
           <div className="card card-compact w-96 bg-base-100">
            <figure><img className='ghgt' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
             <h2 className="card-title">{name}</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions">
             <p className='badge badge-outlin'>Total Time: 10<small> min</small> </p>
             <p className='badge badge-outlin'>Total Quiz: {total}</p>
             </div>
             <button className="btn btn-secondary"> <Link to={`quiz/${id}`} >Start Quiz</Link> </button>
            </div>
            </div>
        </div>
    );
};

export default Courses;