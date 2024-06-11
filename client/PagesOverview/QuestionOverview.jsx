import React, { useState, useEffect } from "react";
import QuestionComp from "../Components/QuestionComp";
import "../Css/Question2.css";


function Questions() {
    const [timeRemaining, setTimeRemaining] = useState(19);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeRemaining]);


    return (
        <>
            <div className="containerQuestionPage">
                <div className="mainQuestionDivQuestionPage">
                    <QuestionComp />
                </div>

                <div>
                    Time Remaining: {timeRemaining} seconds
                </div>

            </div>

        </>
    );
}

export default Questions;
