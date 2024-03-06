const { Opportunities } = require('../database/index');

module.exports = {
    getallopportunities: () => {
        return Opportunities.findAll();
    },
    getoneopportunitybytitle: (title) => {
        return Opportunities.findOne({ where: { title: title } });
    },
    getallopportunitybycategory: (category) => {
        return Opportunities.findAll({ where: { category: category } });
    },
    createopportunity: (body) => {
        return Opportunities.create(body);
    },
    deleteopportunity: (id) => {
        return Opportunities.destroy({ where: { id: id } });
    },
    updateopportunity: (id, body) => {
        return Opportunities.update(body, { where: { id: id } });
    },
    getallopportunitiesbyproviderid: (id) => {
        return Opportunities.findAll({ where: { providers_id: id } });
    }
};
