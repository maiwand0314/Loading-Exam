import trollGif from '../assets/BrownTroll.gif';


async function insertChoice(choice) {
    await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({ choice }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function QuestionsBrownVersion({ setCurrentPage }) {


                return (
                <div className="ClickerFurther">
             
                    <div className="containerQuestionPage">
                        <div className="mainImageDiv">
                            <img className="mainImage" src={trollGif} alt="Gif of troll" />
                        </div>
                        <div className="mainQuestionDiv">
                            <h1 className="mainQuestion">You've met a fairy! What do you want to do?   </h1>
                        </div>
                        <div className="buttonsContainer">
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("A"); }}>A. Run LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("B"); }}>B. Fart LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("C"); }}>C. Cry LOL</button>
                            <button className="questionButton" onClick={() => { setCurrentPage('waitingPageAfterBrownQuestion'); insertChoice("D"); }}>D. Fight LOL</button>
                        </div>
                    </div>
              
                </div>
                );

        

            }

export default QuestionsBrownVersion;