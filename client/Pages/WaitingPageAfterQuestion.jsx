import bowser from "../assets/boswer-fact(2).jpg"
import { useState, useEffect} from 'react'
import WaitingPageAfterQuestionLoadingBar from "../Components/WaitingPageAfterQuestionLoadingBar";
import CharacterTopLeft from "../Components/CharacterTopLeft";

function WaitingPageAfterQuestion({ setCurrentPage }) {




    return(
        
        <><CharacterTopLeft></CharacterTopLeft>
           
        <div className="containerWaitingPageAfterQuestion">
                    <h1 className="mainTitleAfterQuestion">Please enjoy the meme while counting votes</h1>
                    <div className="loadingDivAfterQuestion">
                
                    <WaitingPageAfterQuestionLoadingBar />
                     </div>
                    <div className="mainImageContainerFunFactPageAfterQuestion">
                    <img className="mainImageFunFactPageAfterQuestion" src={bowser} alt="Image of meme"></img>
                    </div>
                    
        </div>
        
        </>
  
     
       



    )
   


}

export default WaitingPageAfterQuestion;