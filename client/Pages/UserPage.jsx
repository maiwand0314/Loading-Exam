import FrontPage from "./FrontPage";
import React, { useState, useEffect } from 'react';
import React from 'react'
import UsernameAndAvatar from "../Components/UsernameAndAvatar";
import WaitingPage from "./WaitingPage";
import "../Css/UsernameAndAvatar.css"
import "../Css/FrontPage.css"
import "../Css/index.css"
import "../Css/IntermissionPage.css"
import "../Css/WaitingPage.css"
import "../Css/GetReadyToVote.css"

import GetReadyToVote from "./GetReadyToVote";
import IntermissionPage from "./IntermissionPage";
import Questions from "./Questions"


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
            

            </>
            
        )

}

export default UserPage;