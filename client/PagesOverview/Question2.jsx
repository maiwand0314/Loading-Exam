import React, { useEffect, useState } from 'react';
import trollGif from "../assets/BrownTroll.gif";



function QuestionOverView2({setCurrentPageOverView}) {
    const [countdown, setCountdown] = useState(5);





    useEffect(() => {
        if (countdown === 0) {
            // Handle the case when the countdown reaches 0
            setCurrentPageOverView('waitingPageAfterBrownQuestion'); // Redirect to a timeout page or handle as needed
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, setCurrentPageOverView]);





    return (
        <div className="ClickerFurtherBrownVersion">

            <div className="containerQuestionPageBrownVersion">

                <div className={"bigDiv"}></div>


                <div className="mainQuestionDivBrownVersion">
                    <h1 className="mainQuestionBrownVersion">You've met a fairy! What do you want to do?   </h1>
                </div>


                <div className="countdownTimerBrown">
                    Time left: {countdown} seconds
                </div>

            </div>

        </div>
    );
}

export default QuestionOverView2;