import FrontPage from "../Pages/FrontPage";
import React, { useState } from 'react';

import "../Css/UsernameAndAvatar.css"
import "../Css/FrontPage.css"
import "../Css/index.css"
import "../Css/IntermissionPage.css"
import "../Css/WaitingPage.css"
import "../Css/GetReadyToVote.css"
import "../Css/ResultPage.css"
import "../Css/WaitingPageAfterQuestion.css"
import "../Css/QuestionsBrownVersion.css"
import "../Css/ResultPageBrownVersion.css"
import "../Css/WaitingPageAfterBrownQuestion.css"

import UsernameAndAvatar2 from "../Components/UsernameAndAvatar2";

function UserPage2 () {
    const [currentPage, setCurrentPage] = useState('frontPage'); // New state to control the page rendering
    



        return(
            <>

            {currentPage === "frontPage" && <FrontPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "avatarPage" && <UsernameAndAvatar2 currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}

            

            </>
            
        )

}

export default UserPage2;