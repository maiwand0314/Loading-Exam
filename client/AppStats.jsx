import React, { useState, useEffect } from 'react';
import './AppStats.css';

const ListA = []
const ListB = []

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



function AppStats() {
    const [isFullScreen, setIsFullScreen] = useState(false);

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
    const resulA = await fetch("/api/votes/a");
    console.log(await resulA.json())
    console.log(resulA);
}
    useEffect(() => {

test()


    }, [])



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
            <div className={"result-container"}>
                <h1 className={"results"}>Results</h1>
            </div>

            <div className="container">
                <div className="loader-container">
                    <div className="choice-1">
                        <a>{}</a>
                        <div className={"status-bar-1"}></div>
                        <a>A</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>🦝</h1>
                    </div>
                    <div className="choice-2">
                        <a>{}</a>
                        <div className={"status-bar-2"}></div>
                        <a>B</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>😊</h1>
                    </div>
                    <div className="choice-3">
                        <a>{}</a>
                        <div className={"status-bar-3"}></div>
                        <a>C</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>🥳</h1>
                    </div>
                    <div className="choice-4">
                        <a>{}</a>
                        <div className={"status-bar-4"}></div>
                        <a>D</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>🎉</h1>
                    </div>
                </div>
            </div>

            <button onClick={requestFullScreen} className={"fullscreenButton"}>
                {isFullScreen ? "Exit Fullscreen" : "Go Fullscreen"}
            </button>
        </>
    );
}

export default AppStats;
