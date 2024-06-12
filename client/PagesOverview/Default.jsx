import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import memeOne from "../assets/meme.jpeg";
import React, {useEffect, useState} from "react";
import funfacts from "../assets/funfacts";

function WaitingForPlayers(){




    const [randomFunfact, setRandomFunfact] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funfacts.funFacts.length);
        setRandomFunfact(funfacts.funFacts[randomIndex]);
    }, []);

    return(



        <div className="containerWaitingPage">
            <h1 className="mainTitleAfterQuestion">Please enjoy the funfact while waiting for other players</h1>
            <div className="loadingDivWaitingPage">
                <WaitingPageLoadingBar />
            </div>
            <div className="mainImageContainerFunFactPageAfterQuestion">
                <p className={"nes-balloon from-left"}>{randomFunfact}</p>
            </div>

        </div>
    )
}

export default WaitingForPlayers;