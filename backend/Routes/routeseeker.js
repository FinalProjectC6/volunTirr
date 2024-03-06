const routeseeker=require('express').Router()
const controllerseeker = require('../Controller/controllerseeker')

routeseeker.get("/getallseekers",controllerseeker.getallseekerss)
routeseeker.get('/getoneseeker/:id',controllerseeker.getoneseekerss)
routeseeker.post('/addseeker',controllerseeker.createseeker)
routeseeker.delete('/deleteseeker/:id',controllerseeker.delseeker)
routeseeker.put("/updateseeker/:id",controllerseeker.updaseeker)

module.exports=routeseeker