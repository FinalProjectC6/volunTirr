const express = require("express");
const cors = require("cors");
const db=require('./database/index')
const routeprovider=require('./Routes/routesprovider')
const routeseeker=require('./Routes/routeseeker')
const routeropportunity=require('./Routes/routesopp')
const routerpackage=require('./Routes/routepacakges')
 const routerchat= require('./Routes/routechat')
 const { createServer } = require("node:http");
 const { Server } = require("socket.io");
 const { joinroom, sendMessage, exitroom } = require("./Controller/controllersocket");
const routerauth =require('./Routes/routerauth')



const port = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connect", (socket) => {
  socket.on("connected", (id) => socket.join(id));

  socket.on("message", (id, msg) => socket.to(id).emit("message", msg));

  socket.on("disconnect", (id) => socket.leave(id));
});
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());


app.use('/auth',routerauth)
app.use('/provider',routeprovider)
app.use('/seeker',routeseeker)
app.use('/opp',routeropportunity)
app.use('/package',routerpackage)
app.use('/chat', routerchat)
app.post("/chat/createaudio/:id", async (req, res) => {
  const id = req.params.id;
  await db.Audio.create({
    data: req.body,
    MessageId: id,
  });
  res.sendStatus(201);
});
app.get("/chat/getaudio/:id", async (req, res) => {
  const id = req.params.id;
  const data = await db.Audio.findOne({ where: { messageId: id } });
  res.send(data);
});

server.listen(port, () => {
  console.log("the server is listening on ", port);
});
