import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  // const addValue = () => {
  //   if (counter <= 21) {
  //     counter = counter + 1
  //   } else {
  //     alert("Never Go Above 22")
  //   }
  //   setCounter(counter)
  //   console.log("clicked", counter);
  // }

  // const removeValue = () => {
  //   if (counter >= 1) {
  //     counter = counter - 1
  //   } else {
  //     alert("Never Go Bellow 0")
  //   }
    
  //   setCounter(counter)
  //   console.log("clicked", counter);
  // }

  let paragraph;
  if (counter === 0) {
    paragraph = <p>Never go below 0.</p>;
  } else if (counter === 22) {
    paragraph = <p>Never go above 22.</p>;
  } else {
    paragraph = null;
  }

  const addValue = () => {
    // setCounter(counter => counter+1)
    // setCounter(prevCounter => prevCounter+1)
    setCounter(hitesh => hitesh+1)
    setCounter(hitesh => hitesh+1)
    setCounter(hitesh => hitesh+1)
    setCounter(hitesh => hitesh+1)
 
  }

  const removeValue = () => {
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value:- {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value:- {counter}</button>
      {paragraph}
     
    </>
  )
}

export default App
