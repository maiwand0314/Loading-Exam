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
      <h1>Theatre Play Admin Panel</h1>
      <div className="controls">
        <Button onClick={handlePlayPause} label={isPlaying ? 'Pause' : 'Play'} />
        <Button onClick={handleUpload} label="Upload Play Content" />
      </div>
      <SceneManager prevScene={handlePrevScene} nextScene={handleNextScene} />
    </div>
  );
};

export default AdminPanel;
