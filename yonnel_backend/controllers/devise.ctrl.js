const Devise = require('../models').Devise;

module.exports = {
    async createDevise(req, res) {
        Devise.create(req.body)
            .then(devise => {
                res.status(201).json(devise)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    },
    async getDeviseById(req, res) {
        const devise = await Devise.findByPk(req.params.id)
        if (!devise) {
            return res.status(404).send('Devise not found')
        } else {
            res.status(200).json(devise)
        }
    },

    getAllDevise(req, res) {
        Devise.findAll({
            include:[{
                all: true,nested: true
            }]
        })
            .then(devise => {
                res.status(200).json(devise);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    async updateDevise(req, res) {
        await Devise.update(req.body, { where: { id: req.params.id } })
            .then(devise => {
                res.status(200).json(devise)
            })
            .catch(error => { res.status(500).send(error) })
    },
}