import React, { useState } from 'react';
import Getready from "/Getready.jsx"

async function insertChoice(choice) {
    await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({ choice }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function Questions({currentPage, setCurrentPage }) {


                return (
                <div className="ClickerFurther">
                {currentPage === 'questionPage' && (
                    <div className="containerQuestionPage">
                        <div className="mainImageDiv">
                            <img className="mainImage" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
                        </div>
                        <div className="mainQuestionDiv">
                            <h1 className="mainQuestion">You've met a fairy! What do you want to do?   </h1>
                        </div>
                        <div className="buttonsContainer">
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPage'); insertChoice("A"); }}>A. Run LOL</button>

                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPage'); insertChoice("B"); }}>B. Fart LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPage'); insertChoice("C"); }}>C. Cry LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPage'); insertChoice("D"); }}>D. Fight LOL</button>
                        </div>
                    </div>
                )}
                </div>
                );

        

            }

export default Questions;