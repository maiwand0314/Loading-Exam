// src/components/AdminPanel.jsx
import React, { useState } from 'react';
import Button from './Button';
import SceneManager from './SceneManager';

const AdminPanel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleUpload = () => {
    alert('Upload Play Content');
  };

  const handlePrevScene = () => {
    alert('Previous Scene');
  };

  const handleNextScene = () => {
    alert('Next Scene');
  };

  return (
    <div className="admin-panel">
      <h1 className="title">Theatre Play Admin Panel</h1>
      <div className="controls">
        <div className="button-group">
          <button className="btn" onClick={handlePlayPause}>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button className="btn" onClick={handleUpload}>
            <span>Upload Play Content</span>
          </button>
        </div>
        <SceneManager onPrevScene={handlePrevScene} onNextScene={handleNextScene} />
      </div>
    </div>
  );
};

export default AdminPanel;