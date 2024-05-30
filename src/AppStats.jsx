import React from 'react';
import './AppStats.css';

function AppStats() {
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

        //Adder det som typ "+= .innerhtml"
        document.body.appendChild(spawnEmoji);

        // Fjerner emojien etter 5 sekunder
        setTimeout(() => {
            spawnEmoji.remove();
        }, 5000);
    };

    return (
        <>
            <div className={"result-container-2"}>
                <img className={"fig2"} alt={"vortex"} src={"images/SwordmanSUp.png"}/>
            </div>

            <div className={"result-container"}>
                <h1 className={"results"}>Results</h1>
            </div>

            <div className="container">
                <div className="loader-container">
                    <div className="choice-1">
                        <a>30</a>
                        <div className={"status-bar-1"}></div>
                        <a>A</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>🦝</h1>
                    </div>
                    <div className="choice-2">
                        <a>40</a>
                        <div className={"status-bar-2"}></div>
                        <a>B</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>😊</h1>
                    </div>
                    <div className="choice-3">
                        <a>10</a>
                        <div className={"status-bar-3"}></div>
                        <a>C</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>🥳</h1>
                    </div>
                    <div className="choice-4">
                        <a>20</a>
                        <div className={"status-bar-4"}></div>
                        <a>D</a>
                        <h1 className={"emoji"} onClick={toggleSpawnAnimation}>🎉</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppStats;
