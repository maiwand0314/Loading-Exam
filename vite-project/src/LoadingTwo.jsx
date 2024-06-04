import React, {useEffect, useState} from 'react';

function LoadingTwo() {
const [filled, setFilled] = useState(0);
const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 0.1), 10)
		
		}
	},[filled, isRunning])

	useEffect(() => {
		setIsRunning(true);
	  }, []);

  return (
	  <div className='progressBarContainer'>
		  <div className="progressbar">
		  <span className="progressPercent">{ Math.floor(filled) }%</span>
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				/*  backgroundColor: "#2f2f54", */
					backgroundColor: "#00728f",
					
				  	transition:"width 0.1s"

			  	}}></div>
		  </div>
	</div>
  )
}

export default LoadingTwo;