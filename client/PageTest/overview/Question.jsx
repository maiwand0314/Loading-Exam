import React, { useEffect, useState } from 'react';



function QuestionOverView() {
    const [countdown, setCountdown] = useState(5);
    const [question, setQuestion] = useState(null);

    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        async function fetchAnswers() {
            const response = await fetch("/api/questions");
            const data = await response.json();

            setQuestion(data[0]?.name);

        }

        fetchAnswers();
    }, []);





    useEffect(() => {

        if (countdown <= 0){

            return

        }

        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);





    const answers = [
        { id: 'A', answer: question },

    ];



    return (
        <div>

            <div className="container">

                <div className="mainQuestionDiv">
                    <h1 className="mainQuestion">  {answers.map(
                        (data) =>
                            data.answer && (
                                <p
                                    key={data.id}
                                    className="questionButton"
                                >{data.answer}</p>
                            )
                    )}</h1>
                    <div className="countdownTimerQuestionPage">
                        Time left: {countdown} seconds
                    </div>
                </div>

            </div>

        </div>
    );
}

export default QuestionOverView;