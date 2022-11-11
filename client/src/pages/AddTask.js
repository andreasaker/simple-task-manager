import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    completed: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "completed") {
      setTask((prev) => ({ ...prev, [name]: checked }));
    } else {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/tasks", task);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="page" className="pageCard">
      <button className="back" type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <h1>AddTask</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={task.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={(e) => handleChange(e)}
        />
        <div>
          <input
            type="checkbox"
            name="completed"
            value={task.completed}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="completed">completed</label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
