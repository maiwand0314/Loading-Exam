import React, { useState, useEffect } from 'react';
import "../Css/AdminPanel.css";

const AdminPanel2 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);

        // Clean up function to close WebSocket connection when component unmounts
        
    }, []);

    const handleChooseScene = () => {
        if (socket && selectedOption) {
            // Send selected option to WebSocket server
            socket.send(JSON.stringify({ option: selectedOption }));
        } else {
            console.error("WebSocket connection not available or no option selected");
        }
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="admin-panel">
            <h1 className="title">Theatre Play Admin Panel</h1>
            <div className="controls">
                <select className="input" value={selectedOption} onChange={handleSelectChange}>
                <option value="intermissionScreen">Play Scene (intermission page)</option>
                <option disabled>---------------------------------------------------</option>
               
                    <option value="waitingPage">Waiting Page</option>
                    <option value="getReadyToVotePage">Choosing next scene (Choice page)</option>
                    <option value="resultPage">Show results (Result page)</option>
                    <option disabled>---------------------------------------------------</option>
                    <option value="getReadyToVoteSecond2">Choosing next scene (brown version)</option>
                    <option value="resultPageBrownVersion">Show results (brown version)</option>
                    <option disabled>---------------------------------------------------</option>
                    <option value="EndingPageMaiwand">End the Play/Game (ending page)</option>
                    
                
                </select>
                <button onClick={handleChooseScene} className="btn"><p>Select</p></button>
        

            </div>
        </div>
    );
};

export default AdminPanel2;
