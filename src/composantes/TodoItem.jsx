function TodoItem({ task}) {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center "
    
    >
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          
        />

        <span>
          {task.text}
        </span>

        <span
          className= "bg-success" 
         
        >
          
        </span>
      </div>

      <button
        className="btn btn-sm btn-danger"
        
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;