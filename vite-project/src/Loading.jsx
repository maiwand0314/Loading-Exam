import App from './App'

const loadingBar = document.getElementsByClassName
("loadingBar")[0]
setInterval(() => {const computedStyle = getComputedStyle(loadingBar)
    const width = parseFloat(computedStyle.getPropertyValue
        ('--width')) || 0
        loadingBar.style.setProperty('--width', width + 0.1)
    
}, 5)

function Loading() {


    return(
        <>
        <div className="loadingBar" style={{"--width": 10}} 
        data-label="Loading"></div>
        </>
    );


}

export default Loading