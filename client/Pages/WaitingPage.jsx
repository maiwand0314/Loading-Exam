import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import memeOne from "../assets/meme.jpeg"

function WaitingPage({ setCurrentPage }) {

    handleClick = (event) => {
        console.log('Screen clicked!', event);
        setCurrentPage('intermissionScreen');
      };
    return(
        
       <div className="ClickerFurther" onClick={this.handleClick}>
           
        <div className="containerWaitingPage">
                    <h1 className="mainTitle">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDiv">
                    <WaitingPageLoadingBar />
                     </div>
                    <div className="mainImageContainer">
                    <img className="mainImage" src={memeOne} alt="Image of a Meme"></img>
                    </div>
                    
        </div>
        
  
     
       
   
        </div>
        

    )
   


}

export default WaitingPage;