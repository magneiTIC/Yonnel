const Client = require('../models').Client;

module.exports = {

    async createClient(req, res) {
        try {
            const clientExist = await Client.findOne({ where: { tel: req.body.tel } })
            if (clientExist) {
                res.status(400).send('Client existe déjà !!!')
            } else {
                const newClient = await Client.create(req.body)
                res.status(201).send(newClient);
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getClientById(req, res){
        res.status(200).json(await Client.findByPk(req.params.id))
    },

    async getAllClients(req, res) {
        const total = await Client.count()
        await Client.findAll({
            include:[{
                all: true,nested: true
            }]
        })
            .then(client => {
                res.status(200).json({client,total})
            })
            .catch(error => {
                res.status(500).send(error)
            })
    },

    async updateClient(req, res) {
        await Client.update(req.body, { where: { id: req.params.id } })
            .then(client => {
                res.status(200).json(client)
            })
            .catch(error => { res.status(500).send(error) })
    },

    // async deleteClient(req, res) {
    //     await Client.destroy(req.body, { where: { id: req.params.id } })
    //     .then(() => {
    //         res.status(200).json({ status: 'success', message: 'Client supprimé' })
    //     })
    //     .catch(err => { res.status(500).send({ status: 'error', message: err }) })
    // }
}