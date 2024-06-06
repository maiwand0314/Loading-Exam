import React, { useState } from 'react';


async function insertChoice(choice) {
    await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({ choice }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function Questions2({ setCurrentPage }) {


                return (
                <div className="ClickerFurther">
             
                    <div className="containerQuestionPage">
                        <div className="mainImageDiv">
                            <img className="mainImage" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
                        </div>
                        <div className="mainQuestionDiv">
                            <h1 className="mainQuestion">You've met a fairy! What do you want to do?   </h1>
                        </div>
                        <div className="buttonsContainer">
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice("A"); }}>A. Run LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice("B"); }}>B. Fart LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterQuestion'); insertChoice("C"); }}>C. Cry LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('endingPageAfterQuestion'); insertChoice("D"); }}>D. Fight LOL</button>
                        </div>
                    </div>
              
                </div>
                );

        

            }

export default Questions2;