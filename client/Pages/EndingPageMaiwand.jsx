import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import EndingPageLoadingBar from '../Components/EndingPageLoadingBar';
import { useNavigate } from 'react-router-dom';
import CharacterEndingPage from '../Components/CharacterEndingPage';

function EndingPageMaiwand () {
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
        <div className="containerEndingPage">
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
                <div className="starsContainer">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            style={{color: 'blue'}}
                            key={index}
                            className={`star ${index < rating ? 'active' : ''}`}
                            onClick={() => handleRatingClick(index + 1)}
                        />
                    ))}
                </div>
            </div>
            <div className='buttonsContainerEndingPage'>
                <button className="questionButtonEndingPage" onClick={handleExitClick}>Exit Game</button>
            </div>
        </div>
    );
}

export default EndingPageMaiwand;
