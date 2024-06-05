import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import bowser from "../assets/boswer-fact(2).jpg"

function WaitingPageAfterQuestion({ setCurrentPage }) {

    handleClick = (event) => {
        console.log('Screen clicked!', event);
        setCurrentPage('resultPage');
      };
    return(
        
       <div className="ClickerFurther" onClick={this.handleClick}>
           
        <div className="containerWaitingPageAfterQuestion">
                    <h1 className="mainTitleAfterQuestion">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDivAfterQuestion">
                    <WaitingPageLoadingBar />
                     </div>
                    <div className="mainImageContainerFunFact">
                    <img className="mainImageFunFact" src={bowser} alt="Image of meme"></img>
                    </div>
                    
        </div>
        
  
     
       
   
        </div>
        

    )
   


}

export default WaitingPageAfterQuestion;