
import React from 'react'
import UserPage from "./Pages/UserPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";



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