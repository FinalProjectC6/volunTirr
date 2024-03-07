const { Packages, PackageHasFeatures, Features } = require('../database/index')




module.exports = {
    createpackage: (newpackage) => {
        Packages.create(newpackage)
    },
    getallpackages: () => {

        console.log(PackageHasFeatures);

        return Packages.findAll({ include: [{ model: Features, attributes: ["name", "id"], through: { attributes: [] } }] })
        // return 'hhrlo', 
        //include: [{ model: Features, attributes: ["name", "id"], through: { attributes: [] } }]
    },
    getonepackage: (title) => {
        return Packages.findOne({ where: { id: 1 }, include: [{ model: Features, attributes: ["name", "id"], through: { attributes: [] } }] })
    },
    deletepackage: (title) => {
        Packages.destroy({ where: { title: title } })
    },
    updatepackage: (id, body) => {
        Packages.update(body, { where: { id: id } })
    }

}