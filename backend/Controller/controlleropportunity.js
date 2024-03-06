const opportunities = require('../Models/opportunities')
const Opportunities=require('../Models/opportunities')



module.exports={
getallopp:async(req,res)=>{
    try{
        let data=await opportunities.getallopportunities()
        res.json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
},
getoneoppbytitle:async(req,res)=>{
    try{
        let title = req.params.title
let data = await opportunities.getoneopportunitybytitle(title)
res.json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
},
getalloppbycategory:async(req,res)=>{
    try{
        let category = req.params.category
let data = await opportunities.getallopportunitybycategory(category)
res.json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
},
createopp:async(req,res)=>{
    try{
let {title,logistics,description,category,start,end,price,numberofseekers,location,image1,image2,image3,image4,
planning,providers_id}=req.body
let body={title,logistics,description,category,start,end,price,numberofseekers,location,image1,image2,image3,image4,
    planning,providers_id}
     opportunities.createopportunity(body)
     res.send('opp created')
    }
    catch{
        (err)=>{
            console.log(err);
        }
    }
},
updateopp:async(req,res)=>{
    try{
        let id = req.params.id
        let {title,logistics,description,category,start,end,price,numberofseekers,location,image1,image2,image3,image4,
            planning}=req.body
            let body={title,logistics,description,category,start,end,price,numberofseekers,location,image1,image2,image3,image4,
                planning}
         opportunities.updateopportunity(id,body)
         res.send('opp updated')
    }
    catch{(err)=>{
        console.log(err);
    }}
},
deleteopp:async(req,res)=>{
    try{
        let id = req.params.id
        opportunities.deleteopportunity(id)

        res.send('opp deleted')
    }
    catch{
(err)=>{
    console.log(err);
}
    }
},
getalloppbyproviderid:async(req,res)=>{
    try{
        let id = req.params.id
let data = await opportunities.getallopportunitiesbyproviderid(id)
res.json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
}

}