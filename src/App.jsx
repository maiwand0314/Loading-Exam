import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const requestFullScreen = () => {
        const element = document.documentElement;
        if (!isFullScreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) { /* Safari */
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { /* IE11 */
                element.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    };

    useEffect(() => {
        const fullscreenChangeHandler = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', fullscreenChangeHandler);

        return () => {
            document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div>
                    <h1>Scene playing.</h1>
                    <h1>Please watch the stage!</h1>
                </div>

                <div className="loader-container">
                    <div className="loader"></div>
                    <div className="loader-inner"></div>
                    <img className={"vortex"} alt={"vortex"} src={"images/Pedro2.gif"}/>
                </div>

                <div>
                    <h1>Loading</h1>
                </div>
            </div>

            <button onClick={requestFullScreen} className={"fullscreenButton"}>
                {isFullScreen ? "Exit Fullscreen" : "Go Fullscreen"}
            </button>
        </>
    );
}

export default App;
