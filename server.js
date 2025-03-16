const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// In-memory tasks array
let tasks = [];
let nextId = 1;

// Routes
app.get('/api/tasks', (req, res) => {
    const sortBy = req.query.sort || 'id';
    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
        return a._id - b._id;
    });
    res.json(sortedTasks);
});

app.post('/api/tasks', (req, res) => {
    const { title, priority, dueDate } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'Task title cannot be empty' });
    }
    
    const newTask = {
        _id: nextId++,
        title,
        completed: false,
        priority: priority || 1,
        dueDate: dueDate || null,
        createdAt: new Date().toISOString(),
        tags: []
    };
    tasks.push(newTask);
    res.json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task._id === id);
    
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
});

app.patch('/api/tasks/:id/toggle', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task._id === id);
    
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    res.json(tasks[taskIndex]);
});

app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task._id !== id);
    res.json({ message: 'Task deleted' });
});

// Add a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
