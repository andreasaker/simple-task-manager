import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/tasks/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleted = async (t) => {
    const editedTask = { ...t, completed: !t.completed };
    try {
      await axios.put("http://localhost:8800/tasks/" + t.id, editedTask);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task">
      <div className="taskHead">
        <h2>{task.name}</h2>
        <button title="Remove task" onClick={() => handleDelete(task.id)}>
          X
        </button>
      </div>

      <p>{task.description}</p>

      {task.completed ? (
        <button onClick={() => handleCompleted(task)}>Re-add Task</button>
      ) : (
        <div>
          <Link to={`/updateTask/${task.id}`}>
            <button>Update Task</button>
          </Link>

          <button onClick={() => handleCompleted(task)}>Complete Task</button>
        </div>
      )}
    </div>
  );
};

export default Task;
