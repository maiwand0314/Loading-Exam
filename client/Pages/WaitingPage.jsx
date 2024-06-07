import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import memeOne from "../assets/meme.jpeg"
import React from "react";
import CharacterTopLeft from "../Components/CharacterTopLeft";

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
                    <div className="mainImageContainerWaitingPage">
                    <img className="mainImageWaitingPage" src={memeOne} alt="Image of a Meme"></img>
                    </div>
                    
        </div>
        </>
  
     
       
   

        

    )
   


}

export default WaitingPage;