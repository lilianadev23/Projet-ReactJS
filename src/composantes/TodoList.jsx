import TodoItem from "./TodoItem";

function TodoList({ tasks,toggleTask,deleteTask}) {
  return (
    <ul className="list-group mt-3">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
     
        />
      ))}
    </ul>
  );
}

export default TodoList;