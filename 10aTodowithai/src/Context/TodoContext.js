// context/TodoContext.js
import { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

