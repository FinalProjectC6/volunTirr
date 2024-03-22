const routerchat=require('express').Router()
const controllerchat=require('../Controller/controllerchat')

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
}); // add to .gitignore
const upload = multer({ storage });
routerchat.post('/createchat',controllerchat.createChat)
routerchat.post("/createmessage", controllerchat.createMessage);
routerchat.get("/getallmessage/:chatId", controllerchat.getallMessage);
routerchat.get("/getallchats/:id/", controllerchat.getAllChats);
routerchat.delete("/deletechat/:chatId", controllerchat.deleteChat);
routerchat.post("/createfile", upload.any(), (_, res) => res.send("success"));
routerchat.get("/getfile/:filename", controllerchat.getfile);
module.exports=routerchat
