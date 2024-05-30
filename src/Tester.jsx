import React, { useState } from 'react';

const Tester = () => {
  const [currentComponent, setCurrentComponent] = useState('ComponentA');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'ComponentA':
        return (
          <>
            <h1>PAGE 1</h1>
            <button onClick={() => setCurrentComponent('ComponentB')}>Load Content 2</button>
          </>
        );
      case 'ComponentB':
        return (
          <>
            <h1>PAGE 2!!!!!!</h1>
            <button onClick={() => setCurrentComponent('ComponentA')}>Load Content 1</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default Tester