import React, { useEffect, useState } from 'react';
import CharacterTopLeft from '../Components/CharacterTopLeft';

function GetReadyToVote2({ setCurrentPage }) {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    

      useEffect(() => {
        setIsRunning(true);
        const timer = setTimeout(() => setCurrentPage("questionPageBrownVersion"), 3500);
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
            <div className='containerGetReadyBrownVersion'>
            <h3 className='mainTitleGetReadyBrownVersion'>Get ready to vote!</h3>
            <div className="progressbarGetReadyBrownVersion">
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "#a66cff",
                    transition: "width 0.5s"
                }}></div>
                <span className="progressPercentGetReadyBrownVersion">{filled}%</span>
          
            </div>
            </div>

        </>
        


    );
}

export default GetReadyToVote2;
