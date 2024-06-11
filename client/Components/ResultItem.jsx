const ResultItem = ({ amountOfVotes, choice, height }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p>{amountOfVotes}</p>
            <div className="bar-container">
                <div className="result-bar" style={{ height: height }}>
                </div>
            </div>
            <p>{choice}</p>
        </div>
    );
}

export default ResultItem;
