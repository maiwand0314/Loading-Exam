import React, { useState, useEffect } from 'react';
import ResultItem from "../../Components/ResultItem"



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
            <div className='resultPage-main-container'

                 style={
                     {
                         display: "flex",

                     }
                 }




            >
                <div className="result-container">
                    <div className='result-title-container'>
                        <h1 className="results-title">Results

                        </h1>
                    </div>

                    <div className="voting-results-displayed" style={
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