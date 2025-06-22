const express = require('express');
const app = express();
const PORT = 3000;

// Sample data: List of 10 students
const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hannah' },
    { id: 9, name: 'Isaac' },
    { id: 10, name: 'Jack' },
];

// Endpoint to get the list of students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
