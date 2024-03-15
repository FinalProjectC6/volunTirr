const routerauth=require('express').Router()
const {Register,Login}=require('../Controller/controllerAuth')
const {RegisterPro,LoginPro}=require('../Controller/controllerAuthPro')




routerauth.post('/signup', Register );
routerauth.post('/login', Login );


routerauth.post('/signupPro', RegisterPro );
routerauth.post('/loginPro', LoginPro );





module.exports = routerauth