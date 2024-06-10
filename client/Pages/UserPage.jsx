import FrontPage from "./FrontPage";
import React, { useState } from 'react';


import UsernameAndAvatar from "../Components/UsernameAndAvatar";

function UserPage () {
    const [currentPage, setCurrentPage] = useState('frontPage'); // New state to control the page rendering
    



        return(
            <>

            {currentPage === "frontPage" && <FrontPage currentPage={currentPage}  setCurrentPage={setCurrentPage}/>}
            {currentPage === "avatarPage" && <UsernameAndAvatar currentPage={currentPage} setCurrentPage={setCurrentPage}/>}

            

            </>
            
        )

}

export default UserPage;