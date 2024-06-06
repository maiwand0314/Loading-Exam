const ResultItem = ({amountOfVotes, choice}) => {

    const height = amountOfVotes === 0 ? "10px" : ${Math.min(10 + amountOfVotes * 10, 300)}px;
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <p style={{}} >{amountOfVotes}</p>
            <div className="bar-container">
                <div
                    className="result-bar"
                    style={{

                        height

                    }}>
                </div>
            </div>
            <p>{choice}</p>
        </div>
    )
}

export default ResultItem;