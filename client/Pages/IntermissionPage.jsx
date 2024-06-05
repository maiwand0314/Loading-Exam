import '../Css/IntermissionPage.css';
import React, {useEffect, useState} from "react";
import pedroGif from "../assets/Pedro2.gif"

function IntermissionPage({ setCurrentPage }) {
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

    handleClick = (event) => {
        console.log('Screen clicked!', event);
        setCurrentPage('getReadyToVotePage');
      };

    return (
    
        <div className="ClickerFurther" onClick={this.handleClick}>
        
            <div className="containerIntermissionPage">
                <div>
                    <h1>Scene playing.</h1>
                    <h1>Please watch the stage!</h1>
                </div>

                <div className="loader-container-pedro">
                <img className={"vortex"} alt={"vortex"} src={pedroGif}/>

                    <div className="loader-pedro"></div>

                    <div className="loader-inner-pedro"></div>
                </div>

                <div>
                    <h1>Loading</h1>
                </div>
            
            <button onClick={requestFullScreen} className={"fullscreenButton"}>
                {isFullScreen ? "Exit Fullscreen" : "Go Fullscreen"}
            </button>
        
            </div>
      
         </div>
    );
}

export default IntermissionPage;