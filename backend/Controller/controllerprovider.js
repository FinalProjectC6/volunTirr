const provider=require('../Models/provider')





module.exports={
     getallproviderss:async(req,res)=>{
        try{
            const data=await provider.getallproviders()
            res.json(data)
        }
        catch{(err)=>{
            console.log(err);
        }}
    },
getoneprovid:async(req,res)=>{
    try{
        let id=req.params.id
        const data= await provider.getoneprovider(id)
        res.json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
},

delprovider:async(req,res)=>{
try{
    let id=req.params.id
    await provider.deleteprovider(id)
    res.send(' provider deleted ')
}
catch{(err)=>{
    console.log(err);
}}
},

upprovider:async(req,res)=>{
try{
    let id=req.params.id
    let {fullname,phone,password,email}=req.body
let body={
    fullname,phone,password,email 
}


await provider.updateprovider(id,body)
res.send('provider updated')

}
catch{(err)=>{
    console.log(err)
}}
},

 addprovider:async(req,res)=>{
try{
    let {fullname,phone,password,email_address,image,gender,age}=req.body
let body={fullname,phone,password,email_address,image,gender,age}

 provider.createprovider(body)
res.send('provider created successfully')
}
catch{(err)=>{
    console.log(err);
}}
}


}