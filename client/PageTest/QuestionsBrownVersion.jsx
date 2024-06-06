import trollGif from '../assets/BrownTroll.gif';
import React, {useState, useEffect} from 'react';


async function insertChoice(choice) {
    await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({ choice }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function QuestionsBrownVersion({ setCurrentPage }) {
    const [countdown, setCountdown] = useState(5);


    useEffect(() => {
        if (countdown === 0) {
            // Handle the case when the countdown reaches 0
            setCurrentPage('waitingPageAfterBrownQuestion'); // Redirect to a timeout page or handle as needed
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, setCurrentPage]);

                return (
                <div className="ClickerFurtherBrownVersion">
             
                    <div className="containerQuestionPageBrownVersion">
                        <div className="mainImageDivBrownVersion">
                            <img className="mainImageBrownVersion" src={trollGif} alt="Gif of troll" />
                        </div>
                        <div className="countdownTimerBrown">
                    Time left: {countdown} seconds
                </div>
                        <div className="mainQuestionDivBrownVersion">
                            <h1 className="mainQuestionBrownVersion">You've met a fairy! What do you want to do?   </h1>
                        </div>
                        <div className="buttonsContainerBrownVersion">
                            <button className="questionButtonBrownVersion" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("A"); }}>A. Run LOL</button>
                            <button className="questionButtonBrownVersion" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("B"); }}>B. Fart LOL</button>
                            <button className="questionButtonBrownVersion" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("C"); }}>C. Cry LOL</button>
                            <button className="questionButtonBrownVersion" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("D"); }}>D. Fight LOL</button>
                        </div>
                    </div>
              
                </div>
                );

        

            }

export default QuestionsBrownVersion;