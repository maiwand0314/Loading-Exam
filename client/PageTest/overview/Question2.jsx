import React, { useEffect, useState } from 'react';



function QuestionOverView2({  }) {
    const [countdown, setCountdown] = useState(5);





    useEffect(() => {

        if (countdown <= 0){

            return
        }

        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);









    return (
        <div>

            <div className="container">

                <div className="mainQuestionDiv">
                    <h1 className="mainQuestion">

                        TEST
                    </h1>
                    <div className="countdownTimerQuestionPage">
                        Time left: {countdown} seconds
                    </div>
                </div>

            </div>

        </div>
    );
}

export default QuestionOverView2;