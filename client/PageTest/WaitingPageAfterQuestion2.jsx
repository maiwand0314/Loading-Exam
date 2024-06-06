import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import bowser from "../assets/boswer-fact(2).jpg"
import {react, useState, useEffect} from 'react'
import WaitingPageAfterQuestionLoadingBar from "../Components/WaitingPageAfterQuestionLoadingBar";

function WaitingPageAfterQuestion2({ setCurrentPage }) {

   
    const [countdown, setCountdown] = useState(5);


    useEffect(() => {
        if (countdown === 0) {
            // Handle the case when the countdown reaches 0
            setCurrentPage('resultPage'); // Redirect to a timeout page or handle as needed
            return;
        }
        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, setCurrentPage]);


    return(
        

           
        <div className="containerWaitingPageAfterQuestion">
                    <h1 className="mainTitleAfterQuestion">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDivAfterQuestion">
                
                    <WaitingPageAfterQuestionLoadingBar />
                     </div>
                    <div className="mainImageContainerFunFactPageAfterQuestion">
                    <img className="mainImageFunFactPageAfterQuestion" src={bowser} alt="Image of meme"></img>
                    </div>
                    
        </div>
        
  
     
       



    )
   


}

export default WaitingPageAfterQuestion2;