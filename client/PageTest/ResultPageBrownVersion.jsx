import React, { useState, useEffect } from 'react';
import ResultItem from "../Components/ResultItem"
import CharacterTopLeft from '../Components/CharacterTopLeft';

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

function ResultPageBrownVersion() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [votes, setVotes] = useState(null);
    const [votesB, setVotesB] = useState(null);
    const [votingResults, setVotingResults] = useState(null)



    const toggleSpawnAnimation = (event) => {
        // Lager en const og får den til å bli = event.currentTarget.
        // Registreringen av eventet gir oss mulighet til å plukke ut det som
        // stod mellom bracketsa i <h1></h1> en textcontent (emojien mellom <h1>🦝</h1> bracetsa)
        // Dette ligger i textcontentet under emoji.textcontent

        const emoji = event.currentTarget;

        // Lager en ny const som vi skal definere attributter for
        // Attributt 1: om det skal være en div? h1? osv
        // Attributt 2: Setter inn hva slags css animasjon den skal få. emoji er en css classe, samme med floating-emoji
        // Attributt 3: Sender over textcontentet fra eventet til textcontentet.
        const spawnEmoji = document.createElement('div');
        spawnEmoji.className = 'emoji floating-emoji';
        spawnEmoji.textContent = emoji.textContent;

        // Viewport med Math.Random utregning
        const x = Math.random() * (window.innerWidth - 40);
        const y = Math.random() * (window.innerHeight - 40);

        spawnEmoji.style.left = `${x}px`;
        spawnEmoji.style.top = `${y}px`;

        document.body.appendChild(spawnEmoji);

        setTimeout(() => {
            spawnEmoji.remove();
        }, 5000);
    };

    const requestFullScreen = () => {
        const element = document.documentElement;
        if (!isFullScreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) { /* Safari */
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { /* IE11 */
                element.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    };

    async function test(){
        const result = await fetch("/api/votes");
        const resultData = await result.json();
        setVotingResults(resultData)
        /*
        const resulB = await fetch("/api/votes/b");
        const data2 = await resulB.json();
            setVotesA(data);
            setVotesB(data2)
            */

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


    useEffect(() => {
        const fullscreenChangeHandler = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', fullscreenChangeHandler);

        return () => {
            document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
        };
    }, []);

    return (
        <>
        <CharacterTopLeft></CharacterTopLeft>
            <div className='resultPage-main-containerBrownVersion'>
                <div className="result-containerBrownVersion">
                    <div className='result-title-containerBrownVersion'>
                        <h1 className="results-titleBrownVersion">Results</h1>
                    </div>

                    <div className="voting-results-displayedBrownVersion" style={
                        {
                            display: "flex",
                            flexDirection: "row", alignItems: "flex-end",
                            justifyContent: "space-evenly"
                        }
                    }>
                        {createResultsJSX()}
                    </div>
                    <div className='emoji-containerBrownVersion'>
                        <p className={"emoji"} onClick={toggleSpawnAnimation}>🦝</p>
                        <p className={"emoji"} onClick={toggleSpawnAnimation}>😊</p>
                        <p className={"emoji"} onClick={toggleSpawnAnimation}>🥳</p>
                        <p className={"emoji"} onClick={toggleSpawnAnimation}>🎉</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResultPageBrownVersion;
