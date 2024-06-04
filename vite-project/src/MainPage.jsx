import LoadingTwo from "./LoadingTwo";

function MainPage() {


    return(
        <>
        <div className="container">
                    <h1 className="mainTitle">Please enjoy the meme while waiting for everyone...</h1>
                    <div className="loadingDiv">
                    <LoadingTwo />
                     </div>
                    <div className="mainImageContainer">
                    <img className="mainImage" src="src/assets/meme1.jpg" alt="Avatar of viking"></img>
                    </div>
       
                  
        </div>
       
 
        </>
    )


}

export default MainPage;