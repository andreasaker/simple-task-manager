import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const [task, setTask] = useState({
    id: null,
    name: "",
    description: "",
    completed: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "completed") {
      setTask((prev) => ({ ...prev, [name]: checked ? 1 : 0 }));
    } else {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:8800/tasks/" + id, task);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get("http://localhost:8800/tasks/" + id);

      setTask(...res.data);
    };
    fetchTask();
  }, [id]);

  return (
    <div id="page" className="pageCard">
      <button className="back" type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <h1>Update Task</h1>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
