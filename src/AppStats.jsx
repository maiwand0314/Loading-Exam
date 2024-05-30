import './AppStats.css';

function AppStats() {
    return (
        <>
            <div className={"result-container"}>
        <h1 className={"results"}>Results</h1>
            </div>
        <div className="container">

            <div className="loader-container">
                <div className="choice-1">
                    <a>30</a>
                    <div className={"status-bar-1"}></div>
                    <a>A</a>
                    <button></button>
                </div>
                <div className="choice-2">
                    <a>40</a>
                    <div className={"status-bar-2"}></div>
                    <a>B</a>
                    <button></button>
                </div>
                <div className="choice-3">
                    <a>10</a>
                    <div className={"status-bar-3"}></div>
                    <a>C</a>
                    <button></button>
                </div>
                <div className="choice-4">
                    <a>20</a>
                    <div className={"status-bar-4"}></div>
                    <a>D</a>
                    <button></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default AppStats;
