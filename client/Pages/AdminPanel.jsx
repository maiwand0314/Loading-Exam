import React, { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import "../Css/AdminPanel.css";

const AdminPanel = () => {
    const [socket, setSocket] = useState(null);
    const [currentState, setCurrentState] = useState(null);
    const [scenes, setScenes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeouts = useRef([]);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);

        // Clean up function to close WebSocket connection when component unmounts
        return () => {
            if (newSocket) {
                newSocket.close();
            }
        };
    }, []);

    const clearAllTimeouts = () => {
        timeouts.current.forEach(timeoutId => clearTimeout(timeoutId));
        timeouts.current = [];
    };

    const handleChooseScene = (option, startCycle = false) => {
        console.log("Sending selected option:", option);
        if (socket) {
            setCurrentState(option);
            // Send selected option to WebSocket server
            socket.send(JSON.stringify({ option }));
        } else {
            console.error("WebSocket connection not available or no option selected");
        }

        if (!startCycle) {
            clearAllTimeouts();
        }
    };

    const startPageCycle = () => {
        clearAllTimeouts();
        handleChooseScene("getReadyToVotePage", true);

        const timeout1 = setTimeout(() => {
            handleChooseScene("questionPage", true);
        }, 5000); // Transition to questionPage after 5 seconds

        const timeout2 = setTimeout(() => {
            handleChooseScene("waitingPageAfterQuestion", true);
        }, 25000); // Transition to waitingPageAfterQuestion after an additional 20 seconds

        const timeout3 = setTimeout(() => {
            handleChooseScene("resultPage", true);
        }, 35000); // Transition to resultPage after an additional 10 seconds

        timeouts.current.push(timeout1, timeout2, timeout3);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const parsedScenes = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }).flat();
                setScenes(parsedScenes);
                setCurrentIndex(0); // Reset to the first scene
                if (parsedScenes.length > 0) {
                    handleChooseScene(parsedScenes[0]);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleNextScene = () => {
        if (currentIndex < scenes.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

            if (scenes[nextIndex] === "questionCycle" ){
                startPageCycle();
                return;
            }

            handleChooseScene(scenes[nextIndex]);

        }
    };

    const handlePreviousScene = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            handleChooseScene(scenes[prevIndex]);
        }
    };

    return (
        <div className="admin-panel-container">
            <div className="admin-panel">
                <h1 className="title">Theatre Play Admin Panel</h1>
                <div className="controls">
                    <button onClick={() => handleChooseScene("intermissionScreen")} className="btn-admin-panel">Intermission Page</button>
                    <button onClick={() => handleChooseScene("waitingPage")} className="btn-admin-panel">Waiting Page</button>
                    <button onClick={startPageCycle} className="btn-admin-panel">Choice Page</button>
                    <button onClick={() => handleChooseScene("resultPage")} className="btn-admin-panel">Result Page</button>
                    <button onClick={() => handleChooseScene("getReadyToVoteSecond2")} className="btn-admin-panel">Brown Version Choice Page</button>
                    <button onClick={() => handleChooseScene("resultPageBrownVersion")} className="btn-admin-panel">Brown Version Result Page</button>
                    <button onClick={() => handleChooseScene("EndingPageMaiwand")} className="btn-admin-panel">Ending Page</button>
                </div>
                <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
                <div className="navigation-buttons">
                    <button onClick={handlePreviousScene} disabled={currentIndex === 0} className="btn-admin-panel">Previous</button>
                    <button onClick={handleNextScene} disabled={currentIndex === scenes.length - 1} className="btn-admin-panel">Next</button>
                </div>
                <div className="storyline-preview">
                    <h2>Storyline</h2>
                    <ul>
                        {scenes.map((scene, index) => (
                            <li key={index} className={index === currentIndex ? 'current-scene' : ''}>
                                {scene}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="index-indicator">
                    <p>Current Index: {currentIndex + 1} / {scenes.length}</p>
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
