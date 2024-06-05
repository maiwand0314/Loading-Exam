import SwordmanSDownAvatar from '../assets/SwordmanSDown.png';
import WaitingPageLoadingBar from '../Components/WaitingPageLoadingBar';

function EndingPage ({ setCurrentPage }) {
    return (
  
        <div className="containerEndingPage">
        <h1 className="mainTitleEndingPage">Thanks for playing! We hope you enjoyed the show</h1>
        <div className="loadingDivEndingPage">
        <WaitingPageLoadingBar />
         </div>
        <div className="mainImageContainerEndingPage">
        <img className="mainImageEndingPage" src={SwordmanSDownAvatar} alt="Image of a Meme"></img>
        <div className="buttonsContainerEndingPage">
                            <button className="questionButtonEndingPage" onClick={() => { }}>Exit Game</button>

                                        
                        </div>
                        
        </div>
        
        
</div>

                    
      
          
            

    )
}
export default EndingPage;