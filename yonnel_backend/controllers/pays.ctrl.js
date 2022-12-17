const Pays = require('../models').Pays;

module.exports = {
    async createPays(req, res) {
        Pays.create(req.body)
            .then(pays => {
                res.status(201).json(pays)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    },

    async getPaysById(req, res) {
        const pays = await Pays.findByPk(req.params.id)
        if (!pays) {
            return res.status(404).send('Pays not found')
        } else {
            res.status(200).json(pays)
        }
    },

    async getAllPays(req, res) {
        const total = await Pays.count()
        Pays.findAll({
            include:[{
                all: true,nested: true
            }]
        })
            .then(pays => {
                res.status(200).json({pays,total});
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    async updatePays(req, res) {
        await Pays.update(req.body, { where: { id: req.params.id } })
            .then(pays => {
                res.status(200).json(pays)
            })
            .catch(error => { res.status(500).send(error) })
    },
    
}