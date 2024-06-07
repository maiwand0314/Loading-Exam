import React, { useState } from 'react';
import EndingPageLoadingBar from '../../Components/EndingPageLoadingBar';
import { useNavigate } from 'react-router-dom';


function EndingPageMaiwandOverview () {
    const [rating, setRating] = useState(0);
    const handleRatingClick = (value) => {
        setRating(value);

        console.log(`${value}`);
    };

    const navigate = useNavigate(); // Use navigate for programmatic navigation





    return (
        <div className="containerEndingPage">
            <h1 className="mainTitleEndingPage">Thanks for playing! We hope you enjoyed the show</h1>
            <div className='endingPageAvatarImage'>
            </div>
            <div className="loadingDivEndingPage">
                <EndingPageLoadingBar/>
            </div>
            <div className="mainImageContainerEndingPage">


            </div>
            <div className="reviewSection">
                <p>Please leave a Review on your Phone</p>
            </div>

        </div>
    )
}

export default EndingPageMaiwandOverview;