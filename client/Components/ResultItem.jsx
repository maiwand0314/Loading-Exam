const ResultItem = ({ amountOfVotes, choice }) => {
    const barHeight = amountOfVotes === 0 ? "10px" : `${Math.min(10 + amountOfVotes * 10, 300)}px`;

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>{amountOfVotes}</p>
            <div className="bar-container">
                <div className="result-bar" style={{ height: barHeight }}>
                </div>
            </div>
            <p>{choice}</p>
        </div>
    )
}

export default ResultItem;