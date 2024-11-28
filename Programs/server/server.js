const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const tasks = [
    { id: 1, name: "Task 1", start: "2024-11-01", end: "2024-11-10" },
    { id: 2, name: "Task 2", start: "2024-11-05", end: "2024-11-15" },
];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Const-Type', 'text/plain');
//     res.end('Hello, world!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at http:localhost:3000/');
// });