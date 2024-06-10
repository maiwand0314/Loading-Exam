import React, { useState, useEffect } from 'react';
import "../Css/FrontPage.css"
import RoadLines from "../assets/Linern.gif"

function FrontPage({ setCurrentPage }) {
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [ShowerUserPage, setShowUserPage] = useState(false);

  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === 'ab1c34') {
      setIsCodeCorrect(true);
      setCurrentPage("avatarPage");

    }
  };





  return (

    <div className="FrontPage">

        <div className="nes-container is-rounded is-primary test1">

          <div className="gridFrontPage">
          <div className="grid-itemFrontPage grid-item-fullFrontPage">
            <h1 className='mainTitleFrontPage'>Welcome</h1>
          </div>
          <div className="grid-itemFrontPage grid-item-fullFrontPage">
        
            {loading ? (
              <div className="loading-barFrontPage">
                <div className="loading-bar-fillFrontPage"></div>
              </div>
            ) : (
              <div>
               {/* {isCodeCorrect ? (
                  <NextPage />
               */}
              
                  <form onSubmit={handleSubmit} className="code-inputFrontPage">
                    <label className="enterYourCodeFrontPage" htmlFor="code">Enter your code:</label>
                    <input className='nes-input is-dark'
                      type="text"
                      id="code"
                      name="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button className='enterGameFrontPage' type="submit">Join Game</button>
                  </form>
                
                
              </div>
            )}
           
          </div>
          
        </div>
        
      </div>


    </div>
  );
}

export default FrontPage;