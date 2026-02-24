import TodoItem from "./TodoItem";

function TodoList({ tasks}) {
  return (
    <ul className="list-group mt-3">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
     
        />
      ))}
    </ul>
  );
}

export default TodoList;