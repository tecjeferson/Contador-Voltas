import React, { useState, useEffect } from 'react'
import './styles.css'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'
//useState e o mesmo que Hook


function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null

    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
        //console.log('chamou!')
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)

      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const decrement = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1)

    }
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div>

      <MostraVoltas voltas={numVoltas} />


      <Button text='+' className='bigger' onClick={increment} />
      <Button text='-' className='bigger' onClick={decrement} />
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo / numVoltas)} />
      }

      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'} />
      <Button onClick={reset} text='Reiniciar' />
    </div>
  )
}

export default App
