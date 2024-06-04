import React, { useEffect, useState } from 'react';
import AppStats from "./AppStats";

function Getready() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showAppStats, setShowAppStats] = useState(false); // State to control the rendering of AppStats

    useEffect(() => {
        if (filled < 100 && isRunning) {
            const timer = setTimeout(() => setFilled(prev => prev + 2), 50);
            return () => clearTimeout(timer); // Clean up the timeout to avoid memory leaks
        }
    }, [filled, isRunning]);

    const handleButtonClick = () => {
        setIsRunning(true);
        setShowAppStats(true); // Show the AppStats component when the button is clicked
    };

    return (
        <div>
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "#a66cff",
                    transition: "width 0.5s"
                }}></div>
                <span className="progressPercent">{filled}%</span>
            </div>
            <button className="btn" onClick={handleButtonClick}>Run</button>
            {showAppStats && <AppStats />} {/* Conditionally render AppStats */}
        </div>
    );
}

export default Getready;
