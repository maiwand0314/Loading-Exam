// QuestionButton.js
import React from 'react';

function QuestionButton({ answer, onClick }) {
    return (
        <button className="nes-btn is-primary" onClick={onClick}>
            {answer}
        </button>
    );
}

export default QuestionButton;
