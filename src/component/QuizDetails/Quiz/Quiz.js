import React from 'react';

const Quiz = ({qu}) => {
    const {question, options, correctAnswer} = qu;
    return (
        <div>
            <h3>Qu:{question} </h3>
            <li>{options[0]} </li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
            <li>{options[3]}</li>
        </div>
    );
};

export default Quiz;