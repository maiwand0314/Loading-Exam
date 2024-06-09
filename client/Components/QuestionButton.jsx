// QuestionButton.js
import React from 'react';

function QuestionButton({ answer, onClick }) {
    return (
        <button className="questionButtonQuestionPage" onClick={onClick}>
            {answer}
        </button>
    );
}

export default QuestionButton;
