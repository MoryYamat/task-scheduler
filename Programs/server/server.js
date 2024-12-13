const express = require("express");
const app = express();
const port = 3001;

let projectData = 
[
    {
        "name": "first project",
        "projectTypeName": "Design and Development"
    },
    {
        "name": "seconde project",
        "projectTypeName": "fire fighter"
    }
];

//let  projectData;

const cors = require('cors'); // corsモジュールをインポート
app.use(cors()); // 全てのオリジンを許可

app.use(express.json()); // JSONパーサー

// GET /api/projects
app.get("/api/projects", (req, res) => {
    res.json(projectData);
    //console.log("projectData has sendedsuccessfully!");
});

// POST /api/projects エンドポイント
app.post("/api/projects", (req, res) => {
    console.log("Received project data:", req.body); // クライアントからのデータをログに表示
    if(!Array.isArray(req.body)){
        req.body = [req.body];
    }
    projectData = [...projectData, ...req.body];
    console.log(projectData);
    res.status(200).json({ message: "Project received successfully!" }); // 成功レスポンスを返す
    console.log(typeof(projectData));
});

// POST /api/tasks エンドポイント
app.post("/api/tasks", (req, res) => {
    console.log("Received task data:", req.body);
    if(!Array.isArray(req.body)) {
        req.body = [req.body];
    }
    res.status(200).json({message: "Task received successfully!"});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

