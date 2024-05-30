import './App.css';

function App() {
    return (
        <div className="container">
            <div>
                <h1>Scene playing.</h1>
                <h1>Please watch the stage!</h1>
            </div>

            <div className="loader-container">
                <div className="loader"></div>
                <div className="loader-inner"></div>
                <img className={"vortex"} alt={"vortex"} src={"images/3tick.gif"}/>
            </div>

            <div>
                <h1>Loading</h1>
            </div>
        </div>
    );
}

export default App;
