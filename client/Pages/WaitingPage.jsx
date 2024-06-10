import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import React from "react";
import CharacterTopLeft from "../Components/CharacterTopLeft";
import "../Css/WaitingPage.css"

function WaitingPage({ setCurrentPage }) {

    handleClick = (event) => {
        console.log(event);
        setCurrentPage('intermissionScreen');
      };
    return(
        <>


<CharacterTopLeft></CharacterTopLeft>

        <div className="containerWaitingPage">
                    <h1 className="mainTitleWaitingPage">Please enjoy the meme while waiting for the play to start...</h1>
                    <div className="loadingDivWaitingPage">
                    <WaitingPageLoadingBar />
                     </div>
                    <div className="fun-fact-template">Hei visste du at jeg har en tvillingbror?</div>
                    
        </div>
        </>
  
     
       
   

        

    )
   


}

export default WaitingPage;