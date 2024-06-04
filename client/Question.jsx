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

function Question() {
    const [currentPage, setCurrentPage] = useState('home');

    const choosePage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <div className="container">
                        <div className="mainImageDiv">
                            <img className="mainImage" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
                        </div>
                        <div className="mainQuestionDiv">
                            <h1 className="mainQuestion">You've met a fairy! What do you want to do?   </h1>
                        </div>
                        <div className="buttonsContainer">
                            <button className="questionButton" onClick={() => { setCurrentPage('otherPage'); insertChoice("A"); }}>A. Run LOL</button>

                            <button className="questionButton" onClick={() => { setCurrentPage('otherPage'); insertChoice("B"); }}>B. Fart LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('otherPage'); insertChoice("C"); }}>C. Cry LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('otherPage'); insertChoice("D"); }}>D. Fight LOL</button>
                        </div>
                    </div>
                );

            case 'otherPage':
                return (
                    <div>
                        <h1>hi this is a test</h1>
                    </div>
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
}

export default Question;