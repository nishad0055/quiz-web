import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const QuizDetails = () => {
    const quiz  = useLoaderData();
    console.log(quiz.data.questions)
    return (
        <div>
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