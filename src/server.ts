import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

import db from "./dbConfig";

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Tasks list API!");
});

// GET ALL TASKS
server.get("/tasks", async (_req: Request, res: Response) => {
  try {
    const tasksList = await db("taskslist");
    if (tasksList.length > 0) {
      res.json(tasksList);
    } else {
      res.status(404).json({ message: "No tasks found" });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(404).json({ message: "Error fetching data" });
  }
});

// GET ONE TASK
server.get("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const currentTask = await db("taskslist").where({ id });
    if (currentTask.length > 0) {
      res.json(currentTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(404).json({ message: "Error fetching data" });
  }
});

// CREATE A TASK
server.post("/tasks", async (req: Request, res: Response) => {
  const task = req.body;
  const { title, description, status } = req.body;
  if (!title && !description && !status) {
    return res.status(400).json({
      message:
        "You must include a title, description, or status (Pendiente, En progreso o Completado) in your request",
    });
  }
  try {
    await db("taskslist").insert(task);
    res.status(201).json({ message: "Task successfully added" });
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(404).json({ message: "The task could not be created" });
  }
});

// UPDATE A TASK
server.put("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  if (!title && !description && !status) {
    return res.status(400).json({
      message:
        "You must include a title, description, or status (Pendiente, En progreso o Completado) in your request",
    });
  }
  try {
    await db("taskslist").where({ id }).update({ title, description, status });
    res.status(200).json({ message: "Task successfully updated" });
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(404).json({ message: "The task could not be updated" });
  }
});

// DELETE ALL TASKS
server.delete("/tasks", async (_req: Request, res: Response) => {
  try {
    const deletedCount = await db("taskslist").del();

    if (deletedCount > 0) {
      res.status(200).json({ message: "All tasks successfully deleted" });
    } else {
      res.status(404).json({ message: "No tasks found to delete" });
    }
  } catch (err) {
    console.error("Error deleting tasks:", err);
    res.status(500).json({ message: "Tasks could not be deleted" });
  }
});

// DELETE A TASK
server.delete("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCount = await db("taskslist").where({ id }).del();
    if (deletedCount > 0) {
      res.status(200).json({ message: "Task successfully deleted" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ message: "The task could not be deleted" });
  }
});

export default server;
