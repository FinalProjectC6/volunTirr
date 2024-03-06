const routeprovider=require('express').Router()
const controllerprovider=require('../Controller/controllerprovider')




routeprovider.get('/getallproviders',controllerprovider.getallproviderss)
routeprovider.get('/getoneprovider/:id',controllerprovider.getoneprovid)
routeprovider.delete('/deleteoneprovider/:id',controllerprovider.delprovider)
routeprovider.post('/addprovider',controllerprovider.addprovider)
routeprovider.put('/updateprovider/:id',controllerprovider.upprovider)




module.exports=routeprovider






