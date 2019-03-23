cont express = require("express");
const projectRouter = require("./routes/project-router");
const actionRouter = require("./routes/action-router");

const server = express();
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
  res.send(`<h1>a sprint by Ira Sanchez</h1>`)
})

module.exports = server;