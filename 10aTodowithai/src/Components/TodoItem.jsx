// components/TodoItem.jsx
import { useContext } from 'react';
import { TodoContext } from '../Context';

const TodoItem = ({ todo, index }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="flex items-center justify-between p-2 bg-purple-200 rounded-md shadow-md mb-2">
      <input type="checkbox" className="mr-2" />
      <span className="text-gray-800 font-medium">{todo}</span>
      <div className="flex space-x-2">
        <button className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-md hover:bg-yellow-700">
          Edit
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="bg-red-500 text-white font-bold py-1 px-2 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;