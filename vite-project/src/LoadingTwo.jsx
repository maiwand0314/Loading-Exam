import React, {useEffect, useState} from 'react';

function LoadingTwo() {
const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 0.1), 50)
		}
	},[filled, isRunning])

	useEffect(() => {
		setIsRunning(true);
	  }, []);

  return (
	  <div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
	</div>
  )
}

export default LoadingTwo;