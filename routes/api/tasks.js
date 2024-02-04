const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");

router.post("/", async (req, res) => {
  const taskObj = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  const task = new Task(taskObj);
  await task.save();
  res.status(201).json(task);
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ messsage: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const taskBody = req.body;
    const newTask = await Task.findByIdAndUpdate(id, taskBody, { new: true });
    if (newTask) {
      res.json(newTask);
    } else {
      res.status(404).json({ message: "Task not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
    try{
  const id = req.params.id;
  const deleteTask = await Task.findByIdAndDelete(id)
        if(deleteTask){
            res.json({message : 'The task is deleted!'})
        }else {
            res.status(404).json({message : 'Task not found'})
        }

}catch {
    res.status(500).json({message : 'Something went wrong'})
}
});

module.exports = router
