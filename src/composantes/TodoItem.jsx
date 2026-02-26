function TodoItem({ task,toggleTask,deleteTask}) {
  return (
    <li
      className={task.completed ? "list-group-item d-flex justify-content-between align-items-center list-group-item-primary":"list-group-item d-flex justify-content-between align-items-center"}
    
    >
      <div>
        <input
          type="checkbox"
          className="form-check-input fs-5 me-2"
          checked={task.completed}
          onChange={()=>toggleTask(task.id)}
        />

        <span className="fw-bold fs-5 me-2">
          {task.text}
        </span>

        <span
          className= {task.completed ? "badge ms-2 bg-success text-white" : "badge ms-2 bg-warning text-dark"}
         
        >
          {task.completed ? "Terminée" : "En cours"}
        </span>
      </div>

      <button
        className="btn btn-sm btn-danger"
        onClick={()=>deleteTask(task.id)}
        
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;