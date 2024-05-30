import React, { useState, useEffect } from 'react';
import './App.css';
import meme1 from './meme.jpeg';
import meme2 from './meme.jpeg';
import meme3 from './meme.jpeg';

function App() {
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === 'ab1c34') {
      setIsCodeCorrect(true);
    }
  };

  return (
    <div className="App">
        <div className="container">

          <div className="grid">

          <div className="box box-full">
            <h1>Welcome </h1>
          </div>

          <div className="box box-full">
            {loading ? (
                <div className="loading-bar">
                <div className="loading-bar-fill"></div>
                </div>
                ) : (
              <div>

                {isCodeCorrect ? (
                  <NextPage />
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
                )}

              </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const NextPage = () => {
  const memes = [meme1, meme2, meme3];
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  return (
    <div className="next-page">
      <h2>Here's a Random Meme:</h2>
      <img src={randomMeme} alt="Random Meme" />
    </div>
  );
};

export default App;
