import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import memeOne from "../assets/meme.jpeg"

function WaitingPage2({ setCurrentPage }) {

    handleClick = (event) => {
        console.log(event);
        setCurrentPage('intermissionScreen');
      };
    return(
        

           
        <div className="containerWaitingPage">
                    <h1 className="mainTitleWaitingPage">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDivWaitingPage">
                    <WaitingPageLoadingBar />
                     </div>
                    <div className="mainImageContainerWaitingPage">
                    <img className="mainImageWaitingPage" src={memeOne} alt="Image of a Meme"></img>
                    </div>
                    
        </div>
        
  
     
       
   

        

    )
   


}

export default WaitingPage2;