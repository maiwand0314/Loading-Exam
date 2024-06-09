import React, { useState, useEffect, useRef } from 'react';
import "../Css/AdminPanel.css";
import StartPageCycleButton from "../Components/StartPageCycleButton";
import ResetVotesButton from "../Components/ResetVotesButton";


const AdminPanel = () => {
    const [socket, setSocket] = useState(null);
    const [currentState, setCurrentState] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);

        // Clean up function to close WebSocket connection when component unmounts
        return () => newSocket.close();
    }, []);

    const handleChooseScene = (option, startCycle = false) => {
        console.log("Sending selected option:", option);
        if (socket) {
            setCurrentState(option);
            // Send selected option to WebSocket server
            socket.send(JSON.stringify({ option }));
        } else {
            console.error("WebSocket connection not available or no option selected");
        }
    };

    return (
        <div className="admin-panel-container">
            <div className="admin-panel">
                <h1 className="title">Theatre Play Admin Panel</h1>
                <div className="controls">
                    <button onClick={() => handleChooseScene("intermissionScreen")} className="btn">Intermission Page</button>
                    <button onClick={() => handleChooseScene("waitingPage")} className="btn">Waiting Page</button>
                    <StartPageCycleButton handleChooseScene={handleChooseScene} />
                    <button onClick={() => handleChooseScene("resultPage")} className="btn">Result Page</button>
                    <button onClick={() => handleChooseScene("getReadyToVoteSecond2")} className="btn">Brown Version Choice Page</button>
                    <button onClick={() => handleChooseScene("resultPageBrownVersion")} className="btn">Brown Version Result Page</button>
                    <button onClick={() => handleChooseScene("EndingPageMaiwand")} className="btn">Ending Page</button>
                    <ResetVotesButton />
                </div>
            </div>
            <div className="current-state-box">
                <h2>Current State</h2>
                <div className="current-state">{currentState}</div>
            </div>
        </div>
    );
};

export default AdminPanel;
