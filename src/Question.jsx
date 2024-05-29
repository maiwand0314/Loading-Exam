
function Question() {
    let q1 = "What do?"
    let q2 = "What then?"

    return(

        <>
        <div className="mainImageDiv">
            <img className= "mainImage"src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzA5dXkybDVsZzM5cnFjdWFwZTBrN3BnN2tzdHlra3E0NnJrcnJ6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYsC1UC0BGwG2SQ/giphy.webp" alt="" />
        </div>

        <ul>
            <li>Test</li>
            <li>{q1}</li>
            <li>{q2}</li>

        </ul>
        </>
    );
}

export default Question