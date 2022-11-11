import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = new express();
const db = mysql.createConnection({
  host: "localhost",
  user: "apiUser",
  password: "nCGjTolA4V1BSkrbXDuq",
  database: "taskcontroller",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is response");
});

app.get("/tasks", (req, res) => {
  const q = "SELECT * FROM tasks";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const q = "SELECT * FROM tasks WHERE id = ?";
  db.query(q, taskId, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/tasks_completed", (req, res) => {
  const q = "SELECT * FROM tasks WHERE completed = 1 ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/tasks", (req, res) => {
  const q = "INSERT INTO tasks (`name`,`description`,`completed`) VALUES (?)";
  const values = [req.body.name, req.body.description, req.body.completed];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Task has been added");
  });
});

app.put("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const q =
    "UPDATE tasks SET `name` = ? ,`description` = ? ,`completed` = ? WHERE id = ?";
  const values = [req.body.name, req.body.description, req.body.completed];

  db.query(q, [...values, taskId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Task has been updated");
  });
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const q = "DELETE FROM tasks WHERE id = ?";

  db.query(q, [taskId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Task has been removed");
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
