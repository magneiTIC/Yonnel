const Agence = require('../models').Agence;

module.exports = {
    async createAgence(req, res) {
        try {
            if (!(req.body.nom && req.body.statut && req.body.balance)) {
                res.status(400).send("Tous les champs sont requis!!!")
            } else {
                const newAgence = await Agence.create({
                    nom: req.body.nom,
                    statut: req.body.statut,
                    balance: req.body.balance
                })
                res.status(200).json(newAgence)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async getAgenceById(req, res) {
        const agence = await Agence.findByPk(req.params.id)
        if (!agence) {
            return res.status(404).send('agence not found')
        } else {
            res.status(200).json(agence)
        }
    },

    async getAllAgences(req, res) {
        Agence.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(agence => {
                res.status(200).json(agence);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    async updateAgence(req, res) {
        await Agence.update(req.body, { where: { id: req.params.id } })
            .then(agence => {
                res.status(200).json(agence)
            })
            .catch(error => { res.status(500).send(error) })
    },

    async countAll(req,res){
        const total = await Agence.count()
        res.status(200).json(total)
        
    }
    

}