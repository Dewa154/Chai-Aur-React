import React from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import UpdateTodo from './Components/UpdateTodo'

function App() {

  return (
    <>
      <h1>Learn About Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
