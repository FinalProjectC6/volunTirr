const pack=require('../Models/packages')


module.exports={
    getallpack:async(req,res)=>{
        try{
            const data= await pack.getallpackages()
            res.json(data)
        }
        catch{(err)=>{
            console.log(err);
        }}
    },
    getonepack:async(req,res)=>{
try{
    let title=req.params.title
    const data=await pack.getonepackage(title)
    res.json(data)
}
catch{(err)=>{
    console.log(err);
}}
    },

    createapck:(req,res)=>{
        try{
            let {title,description,price,validity,features}=req.body
            let body={title,description,price,validity,features}
            pack.createpackage(body)
            res.send('package created')
        }
        catch{(err)=>{
            console.log(err);
        }}
    },
    deletepack:async(req,res)=>{
        try{
            let title=req.params.title
            pack.deletepackage(title)
            res.send('package deleted')
        }
        catch{(err)=>{
            console.log(err);
        }}
    },
    updatepack:(req,res)=>{
        try{
            let id= req.params.id
            let {title,description,price,validity,features}=req.body
            let body={title,description,price,validity,features}
            pack.updatepackage(id,body)
            res.send('package updated')
        }
        catch{(err)=>{
            console.log(err);
        }}
    }
}
