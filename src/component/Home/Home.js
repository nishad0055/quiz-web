import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Hero from '../Hero/Hero';


const Home = () => {
    const courses = useLoaderData();
    console.log(courses)
    
    return (
        <div>
            <Hero></Hero>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-10 my-10' >
                {
                    courses.data.map(course => <Courses
                    key ={course.id}
                    course ={course}
                    ></Courses>)
                }
            </div>
              
        </div>
    );
};

export default Home;