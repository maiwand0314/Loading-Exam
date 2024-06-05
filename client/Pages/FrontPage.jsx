import React, { useState, useEffect } from 'react';
import UserPage from '../Pages/UserPage.jsx';


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
        <div className="containerFrontPage">
          <div className="grid">
          <div className="grid-item grid-item-full">
            <h1>Welcome </h1>
          </div>
          <div className="grid-item grid-item-full">
        
            {loading ? (
              <div className="loading-bar">
                <div className="loading-bar-fill"></div>
              </div>
            ) : (
              <div>
               {/* {isCodeCorrect ? (
                  <NextPage />
               */}
              
                  <form onSubmit={handleSubmit} className="code-input">
                    <label htmlFor="code">Enter your code:</label>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                  </form>
                
                
              </div>
            )}
           
          </div>
          
        </div>
        
      </div>
       
      {/*{currentPage === 'nextPage' && <NextPage onContinue={handleNextPageSubmit} />}*/}

    </div>
  );
}

export default FrontPage;