// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const tasks = [
//     { id: 1, name: "Task 1", start: "2024-11-01", end: "2024-11-10" },
//     { id: 2, name: "Task 2", start: "2024-11-05", end: "2024-11-15" },
// ];

// app.get('/api/tasks', (req, res) => {
//     res.json(tasks);
// });

// const PORT = 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();
const port = 3001;

const cors = require('cors'); // corsモジュールをインポート
app.use(cors()); // 全てのオリジンを許可

app.use(express.json()); // JSONパーサー

// POST /api/projects エンドポイント
app.post("/api/projects", (req, res) => {
    console.log("Received data:", req.body); // クライアントからのデータをログに表示
    res.status(200).json({ message: "Project received successfully!" }); // 成功レスポンスを返す
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// http sereves
// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Const-Type', 'text/plain');
//     res.end('Hello, world!\n');
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });