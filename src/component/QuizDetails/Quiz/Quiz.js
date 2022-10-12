import React, { useState } from 'react';
import './Quiz.css'
import {AiFillEye} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({qu}) => {
    const {question, options, correctAnswer} = qu;
    
      

   
       
       
        const selectOption = (option) =>{
            
            if(option === correctAnswer){
                toast("correct Answer")
            }
            else{
                toast("incorrect Answer")
            }
           
           
        }


    
    
    return (
        <div className ='all-qu'>

        
            <h5 className='w-[60%] mx-auto text-center pt-5 text-2xl' >Question: {question.replace(/<[^>]+>/g, '')} </h5>
            
            <div  className='flex justify-center items-center'>
            <button > <AiFillEye ></AiFillEye></button>

            </div>

            <div className="qu-container">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[60%] mx-auto gap-5 my-10">
                 
                    {
                        options.map( (option,i) =>{
                            return  <li  className='bg-purple-500 text-white p-3 cursor-pointer rounded transition duration-200 hover:bg-slate-700 ease-in shadow-lg 
                            '  onClick={()=> selectOption(option)} > {option}  </li> 
                        })
                    }
                 
               </ul>
            </div>
            <ToastContainer
               position="top-center"
               autoClose={1000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               />
        </div>
    );
};

export default Quiz;