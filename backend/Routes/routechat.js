const routerchat=require('express').Router()
const controllerchat=require('../Controller/controllerchat')

routerchat.post('/createchat',controllerchat.createChat)
routerchat.post("/createmessage", controllerchat.createMessage);
routerchat.get("/getallmessage/:chatId", controllerchat.getallMessage);
routerchat.get("/getallchats/:id/", controllerchat.getAllChats);
routerchat.delete("/deletechat/:chatId", controllerchat.deleteChat);

module.exports=routerchat