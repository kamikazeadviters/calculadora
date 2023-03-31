import React, { useEffect } from 'react';
import Button from '../Button/Button';
import { useState } from 'react';

function Calculadora() {
  const [numeroUno, setNumeroUno] = useState();
  const [numeroDos, setNumeroDos] = useState();
  const [hookSimbolo, setSimbolo] = useState();

  const handleClick = (e, simbolo) => {
    setSimbolo({ simbolo });
    console.log(numeroUno, hookSimbolo, numeroDos);
  };

  return (
    <>
      <input onChange={(e) => setNumeroUno(e.target.value)} required />{' '}
      {hookSimbolo}
      <input onChange={(e) => setNumeroDos(e.target.value)} required />
      <Button handleClick={(handleClick, '+')} />
      <Button
        simbolo="-"
        handleClick={handleClick}
        onChange={(e) => setSimbolo(e.target.value)}
      />
      <Button
        simbolo="/"
        handleClick={handleClick}
        onChange={(e) => setSimbolo(e.target.value)}
      />
      <Button
        simbolo="*"
        handleClick={handleClick}
        onChange={(e) => setSimbolo(e.target.value)}
      />
    </>
  );
}

export default Calculadora;
