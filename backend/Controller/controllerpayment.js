const axios = require('axios');
const { PackagesHasProviders, Payment } = require('../database');


const add = async (req, res) => {
    const {  PackageId, ProviderId} = req.params
    console.log( PackageId, ProviderId);
    const url = "https://developers.flouci.com/api/generate_payment"
    try {

        const added = await PackagesHasProviders.create({ PackageId, ProviderId, active: true }, { raw: true })
        if (added) {

            const pay = {
                "app_token": "10f2ad2c-d4bb-47d6-89fd-0b52fd95c91b",
                "app_secret": "939f1d6e-75cb-4041-ba13-41b28511ba64",
                "amount": req.body.amount,
                "accept_card": "true",
                "session_timeout_secs": 1200,
                "success_link": "https://example.website.com/success",
                "fail_link": "https://example.website.com/fail",
                "developer_tracking_id": "13360cca-3c0b-451f-b4c0-427d9bdd035d"
            }
            axios.post(url, pay)
                .then((result) => {
                    console.log(added.dataValues);
                    let { id, date } = added.dataValues
                    Payment.create({ PackagesHasProviderId: id, transaction: req.body.amount, paymentdate: date })
                }).then((result) => {
                    res.send(result)
                })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}
const verify = async (req, res) => {
    await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'apppublic': '10f2ad2c-d4bb-47d6-89fd-0b52fd95c91b',
                'appsecret': '939f1d6e-75cb-4041-ba13-41b28511ba64'
            }
        })
        .then((result) => {
            res.send(result.data)
        })
        .catch((err) => { console.log(err); })

}

module.exports = { add, verify }
