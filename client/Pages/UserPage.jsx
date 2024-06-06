import FrontPage from "./FrontPage";
import React, { useState, useEffect } from 'react';
import React from 'react'
import UsernameAndAvatar from "../Components/UsernameAndAvatar";
import WaitingPage from "./WaitingPage";
import "../Css/UsernameAndAvatar.css"
import "../Css/FrontPage.css"
import "../Css/IntermissionPage.css"
import "../Css/WaitingPage.css"
import "../Css/GetReadyToVote.css"
import "../Css/ResultPage.css"
import "../Css/WaitingPageAfterQuestion.css"
import "../Css/EndingPage.css"
import GetReadyToVote from "./GetReadyToVote";
import IntermissionPage from "./IntermissionPage";
import Questions from "./Questions"
import ResultPage from "./ResultPage"
import WaitingPageAfterQuestion from "./WaitingPageAfterQuestion";
import EndingPage from "./EndingPage";

function UserPage () {
    const [currentPage, setCurrentPage] = useState('frontPage'); // New state to control the page rendering
    



        return(
            <>

            {currentPage === "frontPage" && <FrontPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "avatarPage" && <UsernameAndAvatar currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "waitingPage" && <WaitingPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "intermissionScreen" && <IntermissionPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "getReadyToVotePage" && <GetReadyToVote currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "questionPage" && <Questions currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "resultPage" && <ResultPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "waitingPageAfterQuestion" && <WaitingPageAfterQuestion currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "endingPage" && <EndingPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}

            </>
            
        )

}

export default UserPage;