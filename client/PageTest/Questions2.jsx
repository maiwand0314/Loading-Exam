import {React, useState, useEffect } from "react";
async function insertChoice(choice) {
    await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({ choice }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function Questions2({ setCurrentPage }) {
    const [countdown, setCountdown] = useState(5);


    useEffect(() => {
        if (countdown === 0) {
            // Handle the case when the countdown reaches 0
            setCurrentPage('waitingPageAfterQuestion'); // Redirect to a timeout page or handle as needed
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, setCurrentPage]);

                return (
              
              
                    <div className="containerQuestionPage">
                   
                        <div className="mainImageDivQuestionPage">
                            <img className="mainImageQuestionPage" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
                        </div>
                        <div className="countdownTimerQuestionPage">
                    Time left: {countdown} seconds
                </div>
                        <div className="mainQuestionDivQuestionPage">
                            <h1 className="mainQuestionQuestionPage">You've met a fairy! What do you want to do?   </h1>
                        </div>
                        <div className="buttonsContainerQuestionPage">
                            <button className="questionButtonQuestionPage" onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice("A"); }}>A. Run LOL</button>
                            <button className="questionButtonQuestionPage" onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice("B"); }}>B. Fart LOL</button>
                            <button className="questionButtonQuestionPage" onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice("C"); }}>C. Cry LOL</button>
                            <button className="questionButtonQuestionPage" onClick={() => { setCurrentPage('endingPageAfterQuestion'); insertChoice("D"); }}>D. Fight LOL</button>
                        </div>
                    </div>
              
           
                );
            }

export default Questions2;