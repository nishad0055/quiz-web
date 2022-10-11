import React, { useState } from 'react';
import './Quiz.css'
import {AiFillEye} from 'react-icons/ai'

const Quiz = ({qu}) => {
    const {question, options, correctAnswer,} = qu;
    
    const [eye , setEye] = useState(false);
    

  
        const selectOption = (option) =>{
            if(correctAnswer ===option){
                alert('correct')
            }
            else{
                alert(false)
            }
           
        }


    
    
    return (
        <div className ='all-qu'>
            
            <h5 className='w-[60%] mx-auto text-center pt-5 text-2xl' >Question: {question.replace(/<[^>]+>/g, '')} </h5>
               
            <div  className ='flex items-center justify-center cursor-pointer' >
            <AiFillEye ></AiFillEye>
        

            </div>

            <div className="qu-container">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[60%] mx-auto gap-5 my-10">
                 
                    {
                        options.map( (option) =>{
                            return  <li className='bg-purple-500 text-white p-3 cursor-pointer rounded transition duration-200 ease-out hover:ease-in shadow-lg
                            ' onClick={()=> selectOption(option)} > {option} </li> 
                        })
                    }
                 
               </ul>
            </div>
        </div>
    );
};

export default Quiz;