import React, { useState, useEffect } from 'react';
import "../Css/AdminPanel.css";


const AdminPanel = () => {
    const [socket, setSocket] = useState(null);
    const [currentState, setCurrentState] = useState()
    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);
    }, []);


    const handleChooseScene = (handleButtonClick) => {
        console.log("Sending selected option:", handleButtonClick);
        if (socket) {
            setCurrentState(handleButtonClick)
            // Send selected option to WebSocket server
            socket.send(JSON.stringify({ option: handleButtonClick }));
        } else {
            console.error("WebSocket connection not available or no option selected");
        }
    };



    return (
        <div className="admin-panel-container">
            <div className="admin-panel">
                <h1 className="title">Theatre Play Admin Panel</h1>
                <div className="controls">
                    <button onClick={(event) => handleChooseScene("intermissionScreen", event)} className="btn">Intermission Page</button>
                    <button onClick={(event) => handleChooseScene("waitingPage", event)} className="btn">Waiting Page</button>
                    <button onClick={(event) => handleChooseScene("getReadyToVotePage", event)} className="btn">Choice Page</button>
                    <button onClick={(event) => handleChooseScene("resultPage", event)} className="btn">Result Page</button>
                    <button onClick={(event) => handleChooseScene("getReadyToVoteSecond2", event)} className="btn">Brown Version Choice Page</button>
                    <button onClick={(event) => handleChooseScene("resultPageBrownVersion", event)} className="btn">Brown Version Result Page</button>
                    <button onClick={(event) => handleChooseScene("EndingPageMaiwand", event)} className="btn">Ending Page</button>
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
