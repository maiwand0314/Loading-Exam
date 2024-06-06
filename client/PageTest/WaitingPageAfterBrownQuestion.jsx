import WaitingPageLoadingBarBrownVersion from "../Components/WaitingPageLoadingBarBrownVersion";
import memeClassroom from "../assets/meme1.jpg"

function WaitingPageAfterBrownQuestion({ setCurrentPage }) {

    handleClick = (event) => {
        console.log('Screen clicked!', event);
        setCurrentPage('resultPage');
      };
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