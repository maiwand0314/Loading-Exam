// src/components/SceneManager.jsx
import React from 'react';
import Button from './Button';

const SceneManager = ({ onPrevScene, onNextScene }) => {
  return (
    <div className="scene-manager">
      <button className="btn" onClick={onPrevScene}><span>Previous Scene</span></button>
      <button className="btn" onClick={onNextScene}><span>Next Scene</span></button>
    </div>
  );
};

export default SceneManager;
