import FrontPage from "./FrontPage";
import React, { useState, useEffect } from 'react';
import React from 'react'
import UsernameAndAvatar from "../Components/UsernameAndAvatar";
import WaitingPage from "./WaitingPage";
import "../Css/UsernameAndAvatar.css"
import "../Css/FrontPage.css"


function UserPage () {
    const [currentPage, setCurrentPage] = useState('frontPage'); // New state to control the page rendering
    



        return(
            <>
            {currentPage === "frontPage" && <FrontPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "avatarPage" && <UsernameAndAvatar currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {/*{currentPage === "waitingPage" && <WaitingPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}*/}

            

            </>
            
        )

}

export default UserPage;