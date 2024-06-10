import pedroGif from "../assets/Pedro2.gif"
import "../Css/IntermissionPage.css"

function IntermissionPage() {

    //In Memory of Pedro
    return (
    

        <div className={"pedros-graveyard"}>
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

        
            </div>
        </div>

    );
}

export default IntermissionPage;