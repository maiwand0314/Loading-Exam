import { useState, useEffect} from 'react'
import WaitingPageAfterQuestionLoadingBar from "../Components/WaitingPageAfterQuestionLoadingBar";
import "../Css/WaitingPageAfterQuestion.css";
import funfacts from "../assets/funfacts";
function AQOverview() {

    const [randomFunfact, setRandomFunfact] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funfacts.funFacts.length);
        setRandomFunfact(funfacts.funFacts[randomIndex]);
    }, []);

    return(

        <>

            <div className="containerWaitingPageAfterQuestion">
                <h1 className="mainTitleAfterQuestion">Please enjoy the meme while counting votes</h1>
                <div className="loadingDivAfterQuestion">

                    <WaitingPageAfterQuestionLoadingBar />
                </div>
                <div className="mainImageContainerFunFactPageAfterQuestion">
                    <p className={"nes-balloon from-left"}>{randomFunfact}</p>
                </div>
            </div>

        </>

    )



}

export default AQOverview;