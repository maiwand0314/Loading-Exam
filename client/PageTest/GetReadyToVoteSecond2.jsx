import React, { useEffect, useState } from 'react';

function GetReadyToVote2({ setCurrentPage }) {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    
    const handleButtonClick = () => {
        setIsRunning(true);
        setCurrentPage('questionPage');    };

    

    handleClick = (event) => {
        setCurrentPage('questionPage');
      };

      useEffect(() => {
        setIsRunning(true);
        const timer = setTimeout(() => setCurrentPage("questionPageBrownVersion"), 5000);
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        if (filled < 100 && isRunning) {
            const timer = setTimeout(() => setFilled(prev => prev + 2), 50);
            return () => clearTimeout(timer); // Clean up the timeout to avoid memory leaks
        }
    }, [filled, isRunning]);


    return (

   
            <div className='containerGetReady'>
            <h3>Get ready to vote!</h3>
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
            </div>

        


    );
}

export default GetReadyToVote2;
