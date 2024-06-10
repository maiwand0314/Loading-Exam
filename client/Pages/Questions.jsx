import {React, useState, useEffect } from "react";
import CharacterTopLeft from "../Components/CharacterTopLeft";
import QuestionButton from "../Components/QuestionButton";
import QuestionComp from "../Components/QuestionComp";
import "../Css/Question2.css"
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


    return (
        <>
            <CharacterTopLeft />
            <div className="containerQuestionPage">



                <div className="mainQuestionDivQuestionPage">
                    <QuestionComp />
                </div>
                <div className="buttonsContainerQuestionPage">
                    {answers.map(
                        (data) =>
                            data.answer && (
                                <QuestionButton
                                    key={data.id}
                                    answer={data.answer}
                                    onClick={() => {
                                        setCurrentPage('waitingPageAfterQuestion');
                                        insertChoice(data.id);
                                    }}
                                />
                            )
                    )}
                </div>
            </div>
        </>
    );
}

export default Questions;