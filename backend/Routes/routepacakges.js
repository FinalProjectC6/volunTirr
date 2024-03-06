const routerpackage=require('express').Router()
const controllerpackages=require('../Controller/controllerpackages')


routerpackage.get("/getallpack",controllerpackages.getallpack)
routerpackage.get('/getonepack/:title',controllerpackages.getonepack)
routerpackage.post('/addpack',controllerpackages.createapck)
routerpackage.delete('/deletepack/:title',controllerpackages.deletepack)
routerpackage.put("/updatepack/:id",controllerpackages.updatepack)

module.exports=routerpackage
