import { useState } from "react";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === ""){
      alert("Veuillez Remplir le champ tache");
      return;
    } 

    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Ajouter une tâche..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary">
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;