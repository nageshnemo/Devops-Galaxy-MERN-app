const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Sequelize with Cloud SQL connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

// Define Task model
const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  status: { type: DataTypes.STRING, defaultValue: "pending" },
});

// Sync Database
sequelize.sync().then(() => console.log("Database synced"));

// Routes
app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.get("/health", (req, res) => {
  res.status(200).send("OK");
});
