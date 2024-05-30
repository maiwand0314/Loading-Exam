import Button from "./Button.jsx"
import React, { useState } from 'react';


const otherPage = () => {
    return(
        <>
        <div>
            <h1>hi this is a test</h1>
        </div>
        <button className="questionButton" onClick={() => setCurrentPage('otherPage') }>A. Laugh LOL</button>

        </>
    )
}


const home = () => {
    return(
        <div>
          <button className="questionButton" onClick={() => setCurrentPage('otherPage') }>A. Laugh LOL</button>
        </div>
    )
}


function Question({onTest}) {
    let q1 = "What do?"
    let q2 = "What then?"

    const [currentPage, setCurrentPage] = useState('home');
    
 
    const choosePage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <>
                    <div className="container">
        <div className="mainImageDiv">
            <img className= "mainImage"src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
        </div>
        <div className="mainQuestionDiv">
        <h1 className="mainQuestion">You've met a fairy! What do you want to do?   </h1>
        </div>
        <div className="buttonsContainer">
            

            <button className="questionButton" onClick={() => setCurrentPage('otherPage') }>A. Laugh LOL</button>
            <button className="questionButton">
            A. Laugh LOL
            </button>
            <button className="questionButton">
                A. Laugh LOL
            </button>
            <button className="questionButton">
                A. Laugh LOL
            </button>

        </div>
        </div>


        </>
    );
        
            
            case 'otherPage':
                return(
                    <>
                    <div>
                        <h1>hi this is a test</h1>
                    </div>
                    </>
                );


            default:
                return null;
        }
    
    }

    return (
        <div>
          {choosePage()}
        </div>
      );

    /*
    return(
        <>

        <div className="container">
        <div className="mainImageDiv">
            <img className= "mainImage"src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
        </div>
        <div className="mainQuestionDiv">
        <h1 className="mainQuestion">You've met a fairy! What do you want to do?   </h1>
        </div>
        <div className="buttonsContainer">
            

            <button className="questionButton" onClick={() => setCurrentPage('otherPage') }>A. Laugh LOL</button>
            <button className="questionButton">
            A. Laugh LOL
            </button>
            <button className="questionButton">
                A. Laugh LOL
            </button>
            <button className="questionButton">
                A. Laugh LOL
            </button>

            {choosePage()}
        </div>
        </div>


        </>

    );
    */
}



export default Question