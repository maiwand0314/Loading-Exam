import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import React, {useEffect, useState} from "react";
import CharacterTopLeft from "../Components/CharacterTopLeft";
import "../Css/WaitingPage.css"
import funfacts from "../assets/funfacts";

function WaitingPage({ setCurrentPage }) {


    const [randomFunfact, setRandomFunfact] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funfacts.funFacts.length);
        setRandomFunfact(funfacts.funFacts[randomIndex]);
    }, []);


    return(
        <><CharacterTopLeft></CharacterTopLeft>

        <div className="containerWaitingPage">
                    <h1 className="mainTitleWaitingPage">Please enjoy the funfact while waiting for the play to start...</h1>
                    <div className="loadingDivWaitingPage">
                    <WaitingPageLoadingBar />
                     </div>
            <div className="mainImageContainerFunFactPageAfterQuestion">
                <p className={"nes-balloon from-left"}>{randomFunfact}</p>
            </div>
                    
        </div>
        </>
  
     
       
   

        

    )
   


}

export default WaitingPage;