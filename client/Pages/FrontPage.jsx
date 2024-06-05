import React, { useState, useEffect } from 'react';
import UserPage from '../Pages/UserPage.jsx';
import meme1 from './meme.jpeg';
import meme2 from './meme.jpeg';
import meme3 from './meme.jpeg';

function FrontPage({currentPage, setCurrentPage }) {
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
        {currentPage === 'frontPage' && (
        <div className="container">
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
                ) : ( 
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
                )
                
              </div>
            )}
           
          </div>
          
        </div>
        
      </div>
            )}
      {/*{currentPage === 'nextPage' && <NextPage onContinue={handleNextPageSubmit} />}*/}

    </div>
  );
}



/*
const NextPage = ({ onContinue }) => {
  const memes = [meme1, meme2, meme3];
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];



  return (
    <div className="next-page">
      <h2>Here's a Random Meme:</h2>
      <img src={randomMeme} alt="Random Meme" />
      <button onClick={onContinue}>Continue next page</button>
    </div>
  );
};
*/


export default FrontPage;