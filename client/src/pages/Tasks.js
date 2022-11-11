import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TaskList from "../components/taskList.js";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/tasks");
        setTasks(res.data.filter((t) => t.completed === 0));
        setCompletedTasks(res.data.filter((t) => t.completed === 1));
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, []);

  return (
    <div id="page">
      <h1>Tasks</h1>
      <Link to="/addTask">
        <button>Add task</button>
      </Link>
      <TaskList tasks={tasks} />
      <div className="completedTasks">
        <h2>Completed tasks</h2>
        <TaskList tasks={completedTasks} />
      </div>
    </div>
  );
};

export default Tasks;
