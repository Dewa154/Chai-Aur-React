// components/TodoForm.jsx
import { useState, useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';


const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        className="rounded-md border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        placeholder="Write your todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 bg-green-500 text-white font-bold py-1 px-2 rounded-md hover:bg-green-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;