import React, { useState, useEffect } from 'react';
import ResultItem from "../Components/ResultItem"
import CharacterTopLeft from '../Components/CharacterTopLeft';
import FloatingE from "../Components/FloatingE";

async function getVotes(vote) {
    await fetch("/api/votes", {
        method: "GET",
        body: JSON.stringify({ vote }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}


async function getVotesA(vote) {
    await fetch("/api/votes/a", {
        method: "GET",
        body: JSON.stringify({ vote }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function ResultPage() {
    const [votingResults, setVotingResults] = useState(null);



    async function test() {
        const result = await fetch("/api/votes");
        const resultData = await result.json();
        setVotingResults(resultData);
        return resultData;
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
        <CharacterTopLeft></CharacterTopLeft>
            <div className='resultPage-main-container'>
                <div className="result-container">
                    <div className='result-title-container'>
                        <h1 className="results-title">Results</h1>
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
                    <div className='emoji-container'>
                        <FloatingE emoji="🦝" />
                        <FloatingE emoji="😊" />
                        <FloatingE emoji="🥳" />
                        <FloatingE emoji="🎉" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResultPage;
