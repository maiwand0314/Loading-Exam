import React, { useEffect, useState } from 'react';

function GetreadyToVote({currentPage, setCurrentPage }) {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (filled < 100 && isRunning) {
            const timer = setTimeout(() => setFilled(prev => prev + 2), 50);
            return () => clearTimeout(timer); // Clean up the timeout to avoid memory leaks
        }
    }, [filled, isRunning]);

    const handleButtonClick = () => {
        setIsRunning(true);
        setCurrentPage('questionPage');    };

    
    handleClick = (event) => {
       
        setCurrentPage('questionPage');
      };

    return (
        <div className="ClickerFurther" onClick={this.handleClick}>
        {currentPage === 'getReadyToVotePage' && (
           
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "#a66cff",
                    transition: "width 0.5s"
                }}></div>
                <span className="progressPercent">{filled}%</span>
                <button className="btn" onClick={handleButtonClick}>Run</button>
            </div>
            

        
    )}
    </div>
    );
}

export default GetreadyToVote;
