import React, { useState, useEffect } from 'react';
import ResultItem from "../Components/ResultItem"
import "./Result.css"



function ResultPageOverView() {
    const [votes, setVotes] = useState(null);
    const [votesB, setVotesB] = useState(null);
    const [votingResults, setVotingResults] = useState(null)


    async function test(){
        const result = await fetch("/api/votes");
        const resultData = await result.json();
        setVotingResults(resultData)

        return resultData
    }
    useEffect(() => {

        test()


    }, [])

    const createResultsJSX = () => {
        if (votingResults != null) {
            return Object.entries(votingResults).map(([choice, amountOfVotes], i) => (
                <ResultItem
                    key={i}
                    amountOfVotes={amountOfVotes}
                    choice={choice}
                />
            ));
        }
        return (<p>Loading results...</p>);
    };



    return (
        <>
            <div className='resultPage-main-container-3'

                 style={
                     {
                         display: "flex",

                     }
                 }




            >
                <div className="result-container-3">
                    <div className='result-title-container-3'>
                        <h1 className="results-title-3">Results

                        </h1>
                    </div>

                    <div className="voting-results-displayed-3" style={
                        {
                            display: "flex",
                            flexDirection: "row", alignItems: "flex-end",
                            justifyContent: "space-evenly"
                        }
                    }>
                        {createResultsJSX()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResultPageOverView;
