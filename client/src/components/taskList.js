import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => (
  <div className="taskmap">
    {tasks.length > 0 ? (
      tasks.map((task) => <Task task={task} key={task.id} />)
    ) : (
      <h3 className="quote">Could not find any tasks here :(</h3>
    )}
  </div>
);

export default TaskList;
