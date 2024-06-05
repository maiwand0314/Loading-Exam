import Question from "./Question.jsx"
import FrontPage from "./Pages/FrontPage.jsx"
import React from 'react'
import UserPage from "./Pages/UserPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Css/WaitingPage.css'


function App() {
    return(
        <BrowserRouter>
        <Routes>

    
          <Route path="/" element={<UserPage />} />
         

          
       
            {/*<Question/>*/}

        </Routes>
        </BrowserRouter>
    );

}
export default App