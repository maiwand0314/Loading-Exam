import React, { useState, useEffect } from 'react';
import ResultItem from "../Components/ResultItem"
import "../Css/resultOverview.css"

function ResultOverview() {
    const [votingResults, setVotingResults] = useState(null);

    async function fetchResults() {
        const result = await fetch("/api/votes");
        const resultData = await result.json();
        setVotingResults(resultData);
        return resultData;
    }

    useEffect(() => {
        fetchResults();
    }, []);

    const createResultsJSX = () => {
        if (votingResults != null) {

            // gjør om object til array og sorterer basert på votes
            const sortedResults = Object.entries(votingResults)
                .sort(([, aVotes], [, bVotes]) => bVotes - aVotes);


            let heights = ["200px", "150px", "100px", "50px"];
            let choiceHeightMap = {};
            let currentHeightIndex = 0;
            let previousVotes = null;


            sortedResults.forEach(([choice, votes], index) => {
                // hvis 0 votes, set høyde til 50px
                if (votes === 0) {
                    choiceHeightMap[choice] = "50px";
                } else {
                    // Hvis ikke null, ranger dem og gi dem høyde basert på rang
                    if (previousVotes === null || votes !== previousVotes) {
                        // oppdater indexen når ny stemmeopptelling kommer inn
                        previousVotes = votes;
                        currentHeightIndex = index;
                    }
                    //asigner høyde basert på indexen
                    choiceHeightMap[choice] = heights[currentHeightIndex] || "50px";
                }
            });

            const orderedChoices = ["A", "B", "C", "D"];
            return orderedChoices.map((choice, i) => (
                <ResultItem
                    key={i}
                    amountOfVotes={votingResults[choice] || 0}
                    choice={choice}
                    height={choiceHeightMap[choice] || "50px"}
                />
            ));
        }
        return (<p>Attempting to load results...</p>);
    };

    return (
        <>
            <div className='resultPage-main-container-2'>
                <div className="result-container-2">
                    <div className='result-title-container-2'>
                        <h1 className="results-title-2">Results</h1>
                    </div>

                    <div className="voting-results-displayed-2" style={
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

export default ResultOverview;
