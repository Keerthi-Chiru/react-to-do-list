import { useState } from 'react';

function ToDoItem({ todo, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-2 border-b">
  {isEditing ? (
    <input
      className="flex-1 mr-2 border px-2 py-1 rounded"
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onBlur={handleEdit}
      autoFocus
    />
  ) : (
    <span
      className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
    >
      {todo.text}
    </span>
  )}
  <div className="flex gap-1">
    <button onClick={() => onComplete(todo.id)} className="text-green-600">✅</button>
    <button onClick={() => setIsEditing(true)} className="text-yellow-500">✏️</button>
    <button onClick={() => onDelete(todo.id)} className="text-red-600">❌</button>
  </div>
</li>
  );
}

export default ToDoItem;
