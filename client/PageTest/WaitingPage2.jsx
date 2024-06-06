import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";
import memeOne from "../assets/meme.jpeg"

function WaitingPage2({ setCurrentPage }) {

    handleClick = (event) => {
        console.log('Screen clicked!', event);
        setCurrentPage('intermissionScreen');
      };
    return(
        

           
        <div className="containerWaitingPage">
                    <h1 className="mainTitle">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDiv">
                    <WaitingPageLoadingBar />
                     </div>
                    <div className="mainImageContainer">
                    <img className="mainImage" src={memeOne} alt="Image of a Meme"></img>
                    </div>
                    
        </div>
        
  
     
       
   

        

    )
   


}

export default WaitingPage2;