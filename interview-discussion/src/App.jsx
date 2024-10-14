import { useEffect, useState } from 'react'

import './App.css'

function App() {
  console.log("App rendered", Math.random());
  
  const [value, setValue] = useState(1)


  const [multipliedValue, setMultipliedValue] = useState(1)
  
  // let multipliedValue = value * 5
  const multiplybyfive = () => {
    setMultipliedValue(value * 5)
    // setValue(value + 1)
  }


  // const clickMe = () => {
  //   // console.log("logged");
  //   setValue(value + 1)
    
  // }

  // useEffect(() => {}, [value.value])

  return (
    <>
     {/* <h1>Main value: {value}</h1> */}
     <button onClick={multipliedValue}>Click Me</button>
     <h2>Multiplied Value: {multipliedValue} </h2>
    </>
  )
}

export default App
