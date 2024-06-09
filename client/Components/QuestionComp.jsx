import React, {useEffect, useState} from "react";

function QuestionComp() {


    const [question, setQuestion] = useState(null);


    useEffect(() => {
        async function fetchAnswers() {
            const response = await fetch("/api/questions");
            const data = await response.json();

            setQuestion(data[0]?.name);

        }

        fetchAnswers();
    }, []);


    const answers = [
        {id: 'A', answer: question},

    ];


    return <div className="mainQuestionDiv">
        <h1 className="mainQuestion">  {answers.map(
            (data) =>
                data.answer && (
                    <p
                        key={data.id}
                        className="questionButton"
                    >{data.answer}</p>
                )
        )}</h1>
    </div>


}


export default QuestionComp;






