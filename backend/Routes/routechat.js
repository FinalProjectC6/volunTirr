const routerchat=require('express').Router()
<<<<<<< HEAD
const controllerchat=require('../Controller/controllerchat')

routerchat.post('/createchat',controllerchat.createChat)
routerchat.post("/createmessage", controllerchat.createMessage);
routerchat.get("/getallmessage/:chatId", controllerchat.getallMessage);
routerchat.get("/getallchats/:id/", controllerchat.getAllChats);
routerchat.delete("/deletechat/:chatId", controllerchat.deleteChat);

module.exports=routerchat
=======
const controllerchat=require('../Controller/controllerpackages')
>>>>>>> 328874534f957cdfce43f51ed0b974bf294f2a6e
