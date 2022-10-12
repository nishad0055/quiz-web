import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const QuizDetails = () => {
    const quiz  = useLoaderData();
    return (
        <div>
            <h2 className='w-[60%] mx-auto text-center pt-5 text-3xl font-bold' > {quiz.data.name} Quiz </h2>
           {
            quiz.data.questions.map(qu => <Quiz
            key = {qu.id}
            qu = {qu}
            ></Quiz>)
           }
        </div>
    );
};

export default QuizDetails;