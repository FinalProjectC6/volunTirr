const routerpayment=require('express').Router()



const controllerpayment=require("../Controller/controllerpayment")

routerpayment.post("/pay/:PackageId/:ProviderId",controllerpayment.add)

module.exports=routerpayment