import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
});

  const handleChange = (e) => setInput(e.target.value);

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


 return (
  <div className="max-w-xl mx-auto mt-10 p-4 bg-[#02343F] text-[#F0EDCC] shadow-lg rounded hover:scale-105 transition-transform duration-200">
    <Header />
    <div className="flex gap-2 mb-4">
      <input
        value={input}
        onChange={handleChange}
        placeholder="Enter task"
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        onClick={addTodo}
        className="bg-[#F0EDCC]  px-4 py-2 rounded text-[#02343F] hover:scale-105 transition-transform duration-200"
      >
        Add
      </button>
    </div>
    <ToDoList
      todos={todos}
      onDelete={deleteTodo}
      onComplete={toggleComplete}
      onEdit={editTodo}
    />
  </div>
);

}

export default App;
