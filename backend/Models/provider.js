const {Providers}=require('../database/index')



const getallproviders=()=>{
    return Providers.findAll()
}
const createprovider=(data)=>{
Providers.create(data)
}
const updateprovider = (providerid, body) => {
    return Providers.update(body, { where: { id: providerid } });
}

const deleteprovider=(providerid)=>{
Providers.destroy({where:{id:providerid}})
}
const getoneprovider=(providerid)=>{
return Providers.findOne({where:{id:providerid}})
}

module.exports={
    getallproviders:getallproviders,
    createprovider:createprovider,
    updateprovider:updateprovider,
    deleteprovider:deleteprovider,
    getoneprovider:getoneprovider
}

