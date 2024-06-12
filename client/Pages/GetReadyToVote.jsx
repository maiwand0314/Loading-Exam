import React, { useEffect, useState } from 'react';
import CharacterTopLeft from '../Components/CharacterTopLeft';
import "../Css/GetReadyToVote.css"
function GetReadyToVote() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    

      useEffect(() => {
        setIsRunning(true);
        const timer = setTimeout(() => 5000);
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        if (filled < 100 && isRunning) {
            const timer = setTimeout(() => setFilled(prev => prev + 2), 50);
            return () => clearTimeout(timer); // Clean up the timeout to avoid memory leaks
        }
    }, [filled, isRunning]);


    return (
        <><CharacterTopLeft></CharacterTopLeft>

   
            <div className='containerGetReady'>
                <div className={"load-vote-container"}>
            <h3 className='mainTitleGetReady'>Get ready to vote!</h3>
            <div className="progressbarGetReady">
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "#860202",
                    transition: "width 0.5s"
                }}></div>

                {/*<button className="btnGetReady" onClick={handleButtonClick}>Run</button>*/}
            </div>
                    <span className="progressPercentGetReady">{filled}%</span>
                </div>
            </div>
</>
        


    );
}

export default GetReadyToVote;
