import React, { useState, useEffect } from 'react';
import "../Css/AdminPanel.css";

const AdminPanel = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);

        // Clean up function to close WebSocket connection when component unmounts
        return () => {
            newSocket.close();
        };
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
                    <option value="">Select an option</option>
                    <option value="waitingPage">waitingPage</option>
                    <option value="intermissionScreen">intermissionScreen</option>
                    <option value="getReadyToVotePage">getReadyToVotePage</option>
                    <option value="questionPage">questionPage</option>
                    <option value="resultPage">resultPage</option>
                    <option value="waitingPageAfterQuestion">waitingPageAfterQuestion</option>

                </select>
                <button onClick={handleChooseScene} className="btn"><p>Select</p></button>
            </div>
        </div>
    );
};

export default AdminPanel;
