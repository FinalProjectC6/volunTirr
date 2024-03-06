const routeropportunity=require('express').Router()
const controlleropportunity=require('../Controller/controlleropportunity')





routeropportunity.get("/getallopportunities",controlleropportunity.getallopp)
routeropportunity.get('/getallbycategory/:category',controlleropportunity.getalloppbycategory)
routeropportunity.get("/getoneoppbytitle/:title",controlleropportunity.getoneoppbytitle)
routeropportunity.get("/getalloppbyproviderid/:id",controlleropportunity.getalloppbyproviderid)
routeropportunity.post('/addopp',controlleropportunity.createopp)
routeropportunity.delete('/deleteopp/:id',controlleropportunity.deleteopp)
routeropportunity.put("/updateopp/:id",controlleropportunity.updateopp)


module.exports=routeropportunity