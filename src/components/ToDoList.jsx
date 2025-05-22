import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDelete, onComplete, onEdit }) {
  return (
    <ul className="divide-y">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
