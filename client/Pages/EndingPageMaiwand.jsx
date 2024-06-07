import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import SwordmanSDownAvatar from '../assets/SwordmanSDown.png';
import EndingPageLoadingBar from '../Components/EndingPageLoadingBar';
import { useNavigate } from 'react-router-dom';
import CharacterEndingPage from '../Components/CharacterEndingPage';

function EndingPageMaiwand ({ setCurrentPage }) {
    const [rating, setRating] = useState(0);

    async function insertChoice(review) {
        // Modify the endpoint and payload according to your backend API
        await fetch("/api/review", {
            method: "POST",
            body: JSON.stringify({ review }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const handleRatingClick = async (value) => {
        setRating(value);
        console.log(`${value}`);

        // Call insertChoice to send the rating to the backend
        await insertChoice({ rating: value });
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
    )
}

export default EndingPageMaiwand;
