// const express = require('express');
// const router = express.Router();
// const Task = require('../models/Task');

// // Get all tasks
// router.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find();
//         res.json(tasks);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching tasks' });
//     }
// });

// // Create a new task
// router.post('/tasks', async (req, res) => {
//     const { title } = req.body;
    
//     if (!title || title.trim() === '') {
//         return res.status(400).json({ message: 'Task title cannot be empty' });
//     }

//     try {
//         const task = new Task({ title });
//         await task.save();
//         res.status(201).json(task);
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating task' });
//     }
// });

// // Update a task
// router.put('/tasks/:id', async (req, res) => {
//     const { title } = req.body;
    
//     if (!title || title.trim() === '') {
//         return res.status(400).json({ message: 'Task title cannot be empty' });
//     }

//     try {
//         await Task.findByIdAndUpdate(req.params.id, { title });
//         res.json({ message: 'Task updated' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating task' });
//     }
// });

// // Delete a task
// router.delete('/tasks/:id', async (req, res) => {
//     try {
//         await Task.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Task deleted' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting task' });
//     }
// });

// router.put('/tasks/:id', async (req, res) => {
//     const { title } = req.body;

//     if (!title || title.trim() === '') {
//         return res.status(400).json({ message: 'Task title cannot be empty' });
//     }

//     try {
//         await Task.findByIdAndUpdate(req.params.id, { title });
//         res.json({ message: 'Task updated' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating task' });
//     }
// });


// module.exports = router;
