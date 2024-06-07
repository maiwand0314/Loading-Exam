import {React, useState, useEffect } from "react";
import CharacterTopLeft from "../Components/CharacterTopLeft";
async function insertChoice(choice) {
    await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({ choice }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function Questions({ setCurrentPage }) {
    const [answerA, setAnswerA] = useState(null);
    const [answerB, setAnswerB] = useState(null);
    const [answerC, setAnswerC] = useState(null);
    const [answerD, setAnswerD] = useState(null);

    const [countdown, setCountdown] = useState(2000);





    useEffect(() => {
        async function fetchAnswers() {
            const response = await fetch("/api/elements");
            const data = await response.json();

            setAnswerA(data[0]?.answer);
            setAnswerB(data[1]?.answer);
            setAnswerC(data[2]?.answer);
            setAnswerD(data[3]?.answer);
        }

        fetchAnswers();
    }, []);

    const answers = [
        { id: 'A', answer: answerA },
        { id: 'B', answer: answerB },
        { id: 'C', answer: answerC },
        { id: 'D', answer: answerD },
    ];

















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
              <><CharacterTopLeft></CharacterTopLeft>
              
                    <div className="containerQuestionPage">
                   
                        <div className="mainImageDivQuestionPage">
                            <img className="mainImageQuestionPage" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
                        </div>
                        <div className="countdownTimerQuestionPage">
                    Time left: {countdown} seconds
                </div>
                        <div className="mainQuestionDivQuestionPage">
                            <h1 className="mainQuestionQuestionPage">The troll is aggresive, what to do?   </h1>
                        </div>
                        <div className="buttonsContainerQuestionPage">


                            {answers.map(
                                (data) =>
                                    data.answer && (
                                        <button className="questionButtonQuestionPage"
                                            key={data.id}

                                            onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice(data.id); }}>{data.answer}</button>
                                    )
                            )}

                        </div>
                    </div>
              
           </>
                );
            }

export default Questions;