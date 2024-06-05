import WaitingPageLoadingBar from "../Components/WaitingPageLoadingBar";


function WaitingPage({currentPage, setCurrentPage }) {

    handleClick = (event) => {
        console.log('Screen clicked!', event);
        setCurrentPage('intermissionScreen');
      };
    return(
        
       <div className="ClickerFurther" onClick={this.handleClick}>
        {currentPage === 'waitingPage' && (
           
        <div className="containerWaitingPage">
                    <h1 className="mainTitle">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDiv">
                    <WaitingPageLoadingBar />
                     </div>
                    <div className="mainImageContainer">
                    <img className="mainImage" src="src/assets/meme1.jpg" alt="Avatar of viking"></img>
                    </div>
                    
        </div>
        
  
     
       
        )}
        </div>
        

    )
   


}

export default WaitingPage;