import React, { useState, useEffect } from 'react';

import MostraVoltas from './MostrarVoltas'
import MostraTempo from './MostrarTempo'
import Button from './Button'
import './style.css'

function App() {

  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if(running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  const decrement = () => {
    if(numVoltas > 0){
      setNumVoltas(numVoltas - 1)
    }
  }
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }
  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas}/>
      <Button text='+' className='bigger' onClick={increment} /> 
      <Button text='-' className='bigger' onClick={decrement} />

      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo/numVoltas)} />
      }

      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'} />
      <Button onClick={reset} text='Reininciar' />
    </div>
  );
}

export default App;
