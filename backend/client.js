var io = require("socket.io-client"),
  socket = io("http://localhost:3000");

socket.on("connect", function () {
  console.log("socket connected");
});


socket.emit("connected", 1);
socket.emit("message", 1, "hello world");
