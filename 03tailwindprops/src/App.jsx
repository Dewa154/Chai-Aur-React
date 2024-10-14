import React, { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Chai Aur Code Men !" btnText="click me"/>
     <Card username="Hitesh"  />
     <div>{`${myObj.username} ${myObj.age} ${newArr} `}</div>
    </>
  )
}

export default App
