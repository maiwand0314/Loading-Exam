
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel";
import InGameSwitch from "./PageTest/WaitingPageRouting2SwitchCase";
import UserPage2 from "./PageTest/UserPage2";





function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserPage2 />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/gameID=1" element={<InGameSwitch />} />

            </Routes>
        </BrowserRouter>
    );

}
export default App