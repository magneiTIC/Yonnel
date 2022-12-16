const Paiement = require('../models').Paiement;

module.exports = {
    
    async createPaiement(req, res) {
        Paiement.create(req.body)
            .then(paiement => {
                res.status(201).json(paiement)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    },

    async getPaiementById(req, res) {
        const paiement = await Agence.findByPk(req.params.id)
        if (!paiement) {
            return res.status(404).send('paiement not found')
        } else {
            res.status(200).json(paiement)
        }
    },

    getAllPaiements(req, res) {
        Paiement.findAll({
            include:[{
                all: true,nested: true
            }]
        })
            .then(paiement => {
                res.status(200).json(paiement);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    async updatePaiement(req, res) {
        await Paiement.update(req.body, { where: { id: req.params.id } })
            .then(paiement => {
                res.status(200).json(paiement)
            })
            .catch(error => { res.status(500).send(error) })
    },
    
}