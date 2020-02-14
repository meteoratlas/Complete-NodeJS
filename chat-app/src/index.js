const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", socket => {
    console.log("new user connected");
    socket.emit("onUserJoined", "Welcome!");

    socket.on("onSendMessage", msg => {
        io.emit("sendMessage", msg);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
