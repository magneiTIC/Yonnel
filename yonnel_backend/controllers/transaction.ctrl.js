const Transaction = require('../models').Transaction;
const Client = require('../models').Client;
const User = require('../models').Users;
const Pays = require('../models').Pays;
 


module.exports = {
    // async createTransaction(req, res) {
    //     Transaction.create(req.body)
    //         .then(transaction => {
    //             res.status(200).json({ transaction })
    //         })
    //         .catch(error => {
    //             res.status(500).json(error)
    //         })
    // },


    async createTransaction(req, res) {

        const telEmetteur = req.body.tel1;
        const LidEmetteur = await Client.findOne( { where: {tel : telEmetteur} })

        const telRecepteur = req.body.tel2;
        const LidRecepteur = await Client.findOne( { where: {tel : telRecepteur} })

        const userEmetteur = req.body.login;
        const LidUserEmetteur = await User.findOne( { where: {login : userEmetteur} })

        const paysOri = req.body.pays1;
        const deviseOri = await Pays.findOne( { where: {nom:paysOri} })

        const paysDest = req.body.pays2;
        const deviseDest = await Pays.findOne({ where: {nom:paysDest} })

    
        Transaction.create({
            "idClientEmetteur": LidEmetteur.id,
            "idClientRecepteur": LidRecepteur.id,
            "idUserEmetteur": LidUserEmetteur.id,
            "idDeviseDest":deviseDest.DeviseId,
            "idDeviseOri":deviseOri.DeviseId,
            "frais": req.body.frais,
            "montantRec": req.body.montantRec,
            "statut": req.body.statut,
            // "idUserRecepteur": req.body.idUserRecepteur,
            "date":req.body.date,
        })
            .then(transaction => {
                res.status(200).json({transaction})
            })
            .catch(error => {
                res.status(500).json(error)
            })
    },

    async getTransactionById(req, res) {
        res.status(200).json(await User.findByPk(req.body.id))
    },

    async getAllTransactions(req, res) {
        await Transaction.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(transaction => {
                res.status(200).json(transaction)
            })
            .catch(error => {
                res.status(500).send(error)
            })
    },

    async updateTransaction(req, res) {
        await Transaction.update(req.body, { where: { id: req.body.id } })
            .then(transaction => {
                res.status(200).json(transaction)
                    .catch(error => { res.status(500).send(error) })
            })
    },

    async deleteTransaction(req, res) {
        await Transaction.destroy(req.body, { where: { id: req.body.id } }).then(() => {
            res.status(200).json({ status: 'success', message: 'Transaction supprimé' })
                .catch(err => { res.status(500).send({ status: 'error', message: err }) })
        });

    }
}