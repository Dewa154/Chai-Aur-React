// App.jsx
import {useState, useEffect} from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to local storage on update
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Manage Your Todos</h1>
      <TodoProvider>
        <TodoForm />
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))}
        </ul>
      </TodoProvider>
    </div>
  );
}

export default App;