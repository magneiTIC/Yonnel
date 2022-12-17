const sousAgence = require('../models').SousAgence;
const agence = require('../models').Agence;


module.exports = {
    async createSousAgence(req, res) {
        try {
            if (!(req.body.nom&&req.body.pays&&req.body.ville&&req.body.adresse )) {
                res.status(400).send("Tous les champs sont requis!!!")
            } else {
                const newSousAgence = await sousAgence.create({
                    nom: req.body.nom,
                    pays: req.body.pays,
                    ville: req.body.ville,
                    adresse:req.body.adresse,
                    AgenceId: req.body.AgenceId
                })
                res.status(200).json(newSousAgence)
            }
        } catch (error) {
            res.status(500).json(error)
        }

    },

    async getSousAgenceById(req, res) {
        const sousAgences = await sousAgence.findOne(
       
           { where: {id:req.params.id},
            include:[{
            
                model: agence
                // all:true,nested: true
            }]
        }
            )
        if (!sousAgences) {
            return res.status(404).send('sous agence not found')
        } else {
            res.status(200).json(sousAgences)
        }

    },

    async getAllSousAgences(req, res) {
        sousAgence.findAll(
            {
                include:[{
                    all: true,nested: true
                }]
            }
        )
            .then(sousAgence => {
                res.status(200).json(sousAgence);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    async updateSousAgence(req, res) {
        await sousAgence.update(req.body, { where: { id: req.params.id } })
            .then(sousAgence => {
                res.status(200).json(sousAgence)
            })
            .catch(error => { res.status(500).send(error) })

    },

    async countAll(req,res){
        const total = await SousAgence.count()
        res.status(200).json(total)
        
    }
    

}