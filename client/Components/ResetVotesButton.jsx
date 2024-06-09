import React from 'react';

const ResetVotesButton = () => {
    const handleResetVotes = () => {
        fetch('/api/reset-votes', {
            method: 'POST',
        })
            .then(() => {
                console.log('Votes reset successfully');
            })
            .catch(error => console.error('Error resetting votes:', error));
    };

    return (
        <button onClick={handleResetVotes} className="btn">Reset Votes</button>
    );
};

export default ResetVotesButton;
