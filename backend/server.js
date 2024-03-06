const express = require("express");
const cors = require("cors");
const db=require('./database/index')
const routeprovider=require('./Routes/routesprovider')
const routeseeker=require('./Routes/routeseeker')
const routeropportunity=require('./Routes/routesopp')
const routerpackage=require('./Routes/routepacakges')



const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))




app.use('/provider',routeprovider)
app.use('/seeker',routeseeker)
app.use('/opp',routeropportunity)
app.use('/package',routerpackage)
app.listen(port, () => {
  console.log("the server is listening on ", port);
});
