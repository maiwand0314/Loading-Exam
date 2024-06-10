
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel";
import InGameSwitch from "./PageSwitch/SwitchCasesGame";
import UserPage from "./Pages/UserPage";
import OverView from "./PageSwitch/overView";
import ResultPage from "./Pages/ResultPage";





function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/over-view=1" element={<><OverView /></>} />
                <Route path="/gameID=1" element={<InGameSwitch />} />
                <Route path="/1" element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );

}
export default App