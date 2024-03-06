const {Seekers}=require('../database/index')



const getallseekers=()=>{
    return Seekers.findAll()
}
const createseeker=(data)=>{
    Seekers.create(data)
}
const updateseeker = (seekerid, body) => {
    return Seekers.update(body, { where: { id: seekerid } });
}

const deleteseeker=(seekerid)=>{
Seekers.destroy({where:{id:seekerid}})
}
const getoneseeker=(seekerid)=>{
return Seekers.findOne({where:{id:seekerid}})
}

module.exports={
    getallseekers:getallseekers,
    createseeker:createseeker,
    updateseeker:updateseeker,
    deleteseeker:deleteseeker,
    getoneseeker:getoneseeker
}


