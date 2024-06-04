// src/components/SceneManager.jsx
import React from 'react';
import Button from './Button';

const SceneManager = ({ prevScene, nextScene }) => {
  return (
    <div className="scene-manager">
      <Button onClick={prevScene} label="Previous Scene" />
      <Button onClick={nextScene} label="Next Scene" />
    </div>
  );
};

export default SceneManager;
