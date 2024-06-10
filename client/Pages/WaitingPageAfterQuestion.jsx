import bowser from "../assets/boswer-fact(2).jpg"
import { useState, useEffect} from 'react'
import WaitingPageAfterQuestionLoadingBar from "../Components/WaitingPageAfterQuestionLoadingBar";
import CharacterTopLeft from "../Components/CharacterTopLeft";
import "../Css/WaitingPageAfterQuestion.css";
import funfacts from "../assets/funfacts";
function WaitingPageAfterQuestion({ setCurrentPage }) {

    const [randomFunfact, setRandomFunfact] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funfacts.funFacts.length);
        setRandomFunfact(funfacts.funFacts[randomIndex]);
    }, []);

    return(
        
        <><CharacterTopLeft></CharacterTopLeft>
           
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

export default WaitingPageAfterQuestion;