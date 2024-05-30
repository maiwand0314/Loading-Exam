
function Question() {
    let q1 = "What do?"
    let q2 = "What then?"

    return(
        <>
        <div className="container">
        <div className="mainImageDiv">
            <img className= "mainImage"src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
        </div>
        <div className="mainQuestionDiv">
        <h1 className="mainQuestion">You've met a fairy! What do you want to do?    </h1>
        </div>
        <div className="buttonsContainer">
            <button className="questionButton">
                A. Laugh LOL
            </button>
            <button className="questionButton">
            A. Laugh LOL
            </button>
            <button className="questionButton">
                A. Laugh LOL
            </button>
            <button className="questionButton">
                A. Laugh LOL
            </button>
        </div>
        </div>

        </>
    );
}

export default Question