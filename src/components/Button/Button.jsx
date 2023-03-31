import React from 'react';
import './Buton.css';
function Button({ simbolo, handleClick }) {
  return (
    <button className="Boton" onClick={(e) => handleClick(e)}>
      {simbolo}
    </button>
  );
}

export default Button;
