import WaitingPageLoadingBarBrownVersion from "../Components/WaitingPageLoadingBarBrownVersion";
import memeClassroom from "../assets/meme1.jpg"
import {React, useState, useEffect } from "react";

function WaitingPageAfterBrownQuestion({ setCurrentPage }) {



    const [countdown, setCountdown] = useState(5);


    useEffect(() => {
        if (countdown === 0) {
            // Handle the case when the countdown reaches 0
            setCurrentPage('resultPageBrownVersion'); // Redirect to a timeout page or handle as needed
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, setCurrentPage]);



    return(
        

           <div className="containerWaitingPageAfterBrownQuestion">
        <div className="containerWaitingPageAfterQuestionBrown">
                    <h1 className="mainTitleAfterQuestion">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDivAfterQuestion">
                    <WaitingPageLoadingBarBrownVersion/>
                     </div>
                    <div className="mainImageContainerFunFactBrownVersion">
                    <img className="mainImageFunFactBrownVersion" src={memeClassroom} alt="Image of meme"></img>
                    </div>
                    
        </div>
        </div>
        
  
     
       



    )
   


}

export default WaitingPageAfterBrownQuestion;