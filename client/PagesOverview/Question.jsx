import React, { useEffect, useState } from 'react';



function QuestionOverView({setCurrentPageOverView}) {
    const [countdown, setCountdown] = useState(5);
    const [question, setQuestion] = useState(null);


    useEffect(() => {
        async function fetchAnswers() {
            const response = await fetch("/api/questions");
            const data = await response.json();

            setQuestion(data[0]?.name);

        }

        fetchAnswers();
    }, []);






    useEffect(() => {
        if (countdown === 0) {
            // Handle the case when the countdown reaches 0
            setCurrentPageOverView('waitingPageAfterQuestion'); // Redirect to a timeout page or handle as needed
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, setCurrentPageOverView]);




    const answers = [
        { id: 'A', answer: question },

    ];



    return (
        <div>

            <div className="container">

                <div className="mainQuestionDiv">
                    <QuestionComp></QuestionComp>
                    <div className="countdownTimerQuestionPage">
                        Time left: {countdown} seconds
                    </div>
                </div>

            </div>

        </div>
    );
}

export default QuestionOverView;