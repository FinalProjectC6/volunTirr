const {Packages}=require('../database/index')



module.exports={
createpackage:(newpackage)=>{
Packages.create(newpackage)
},
getallpackages:()=>{
return Packages.findAll()
},
getonepackage:(title)=>{
return Packages.findOne({where:{title:title}})
},
deletepackage:(title)=>{
Packages.destroy({where:{title:title}})
},
updatepackage:(id,body)=>{
    Packages.update(body,{where:{id:id}})
}

}