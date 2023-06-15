// Express handle
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/./"));

const morgan = require("morgan");
app.use(morgan("combined"));

// Server
const http = require("http");
const host = "localhost";
const port = 8082;
//const fs = require("fs").promises;

const server = http.createServer(app);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// Web socket
const WebSocket = require("ws");
const wss = new WebSocket.Server({server});
wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
    ws.send('Hello from server');
  });
  ws.send('Server is connected, hello!');
});

app.get("/cgsg", (req, res) => {
  res.send("CGSG forever!!!");
});

//app.get("/", (req, res) => {
//  res.send("CGSG forever!!!");
//});

