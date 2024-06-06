import React from 'react';
import '../Css/overView.css';
import UserPage from "../PageTest/WaitingPageRouting2SwitchCase";

function OverView() {
    return (
        <div className="overview-container">
            <div className="top-left">
                <span>Game Pin: 123456</span>
            </div>


            <UserPage/>
        </div>
    );
}

export default OverView;
