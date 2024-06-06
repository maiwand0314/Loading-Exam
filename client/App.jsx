
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel2 from "./PageTest/AdminPanel2";
import InGameSwitch from "./PageTest/WaitingPageRouting2SwitchCase";
import UserPage2 from "./PageTest/UserPage2";





function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserPage2 />} />
                <Route path="/admin" element={<AdminPanel2 />} />
                <Route path="/gameID=1" element={<InGameSwitch />} />

            </Routes>
        </BrowserRouter>
    );

}
export default App