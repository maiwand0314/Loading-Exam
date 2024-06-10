import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import EndingPageLoadingBar from '../Components/EndingPageLoadingBar';
import { useNavigate } from 'react-router-dom';
import CharacterEndingPage from '../Components/CharacterEndingPage';
import "../Css/EndingPage.css"

function EndingPage () {
    const [rating, setRating] = useState(0);

    async function insertChoice(rating) {
        await fetch("/api/reviews", {
            method: "POST",
            body: JSON.stringify({ rating }), // Rating is sent as a number
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const handleRatingClick = async (value) => {
        setRating(value);
        console.log(`${value}`);

        // Call insertChoice to send the rating to the backend
        await insertChoice(value);
    };

    const navigate = useNavigate();

    function handleExitClick() {
        navigate('/');
    }

    return (
        <div className="containerEndingPageEndingPageEnding">
            <h1 className="mainTitleEndingPage">Thanks for playing! We hope you enjoyed the show</h1>
            <div className='endingPageAvatarImage'>
                <CharacterEndingPage></CharacterEndingPage>
            </div>
            <div className="loadingDivEndingPage">
                <EndingPageLoadingBar/>
            </div>
            <div className="mainImageContainerEndingPage">
                {/* Add any additional content here */}
            </div>
            <div className="reviewSection">
                <h2>Leave a Review</h2>
                <div className="star-container">
                    {[1, 2, 3, 4, 5].map((starId) => (
                        <i
                            key={starId}
                            className={`nes-icon is-large star ${starId <= rating ? '' : 'is-transparent'}`}
                            onClick={() => handleRatingClick(starId)}
                            id={`star-${starId}`}
                        ></i>
                    ))}
                </div>
            </div>
            <div className='buttonsContainerEndingPage'>
                <button className="nes-btn" onClick={handleExitClick}>Exit Game</button>
            </div>
        </div>
    );
}

export default EndingPage;
