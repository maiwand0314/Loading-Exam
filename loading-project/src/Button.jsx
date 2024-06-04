
import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default Button;
