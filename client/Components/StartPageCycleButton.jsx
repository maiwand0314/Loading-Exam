import React, { useRef } from 'react';

const StartPageCycleButton = ({ handleChooseScene }) => {
    const timeouts = useRef([]);

    const startPageCycle = () => {
        clearAllTimeouts();
        handleChooseScene("getReadyToVotePage", true);

        const timeout1 = setTimeout(() => {
            handleChooseScene("questionPage", true);
        }, 3000); // Transition to questionPage after 5 seconds

        const timeout2 = setTimeout(() => {
            handleChooseScene("waitingPageAfterQuestion", true);
        }, 25000); // Transition to waitingPageAfterQuestion after an additional 20 seconds

        const timeout3 = setTimeout(() => {
            handleChooseScene("resultPage", true);
        }, 35000); // Transition to resultPage after an additional 10 seconds

        timeouts.current.push(timeout1, timeout2, timeout3);
    };

    const clearAllTimeouts = () => {
        timeouts.current.forEach(timeoutId => clearTimeout(timeoutId));
        timeouts.current = [];
    };

    return (
        <button onClick={startPageCycle} className="btn">Question Page Cycle</button>
    );
};

export default StartPageCycleButton;
