import {React, useState, useEffect } from "react";
import CharacterTopLeft from "../Components/CharacterTopLeft";
import QuestionButton from "../Components/QuestionButton";
import QuestionComp from "../Components/QuestionComp";
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
                <div className="mainImageDivQuestionPage">
                    <img className="mainImageQuestionPage" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
                </div>

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