import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };   

    setTasks([...tasks, newTask]);
   
  };
  const toggleTask=(id)=>{
    setTasks(
      tasks.map(
        task => task.id===id ? {...task,completed:!task.completed} : task
      )
    )
  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter(task => task.id!==id))
  }

  
  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger mb-3">Gestion des Taches</h1>
      <div className="card shadow p-4">
        <h2 className="text-primary mb-3">Nouveau Tache :</h2>

        <TodoForm addTask={addTask} />

        <div className="mt-3">
          <span className="badge bg-primary me-2">
            Total: {tasks.length}
          </span>
          <span className="badge bg-success">
            Terminées: {tasks.filter(t => t.completed).length}
          </span>
        </div>
        <h2 className='text-primary mt-5'>Liste des Taches :</h2>
        <TodoList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          
        />
      </div>
    </div>
  );
}

export default Todo