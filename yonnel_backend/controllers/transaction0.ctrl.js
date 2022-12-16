module.exports = {
    async createTransaction(req, res) {
        emet = await Client.findOne({ where: { phone: req.body.emeteur } })
        //Client.findByPk(req.body.emetteurID)
        if (!emet) {
            return res.status(400).json({ ms1: "existePas" })
        }
        recep = await Client.findOne({ where: { phone: req.body.recepteur } })
        if (!recep) {
            return res.status(400).json({ ms: "n'existe pas" })
        }
        devise_origine = await User.findOne({
            include:
                [{
                    model: Sous_Agence,

                    include: {
                        model: Ville,
                        as: 'ville',
                        include: {
                            model: pays,
                            as: "pays"
                        },
                    },
                    as: 'sous_agence',
                }],
        },
            {
                where: {
                    id: req.body.user
                }
            }
        )
        Transaction.create({
            "montant_env": req.body.montant_env,
            "montant_total": req.body.montant_env + req.body.frais,
            "frais": req.body.frais,
            "userID": req.body.user,
            "devise_dest": req.body.devise_dest,
            "devise_origine": devise_origine.sous_agence.ville.pays.deviseID,
            "emetteurID": emet.id,
            "recepteurID": recep.id

        })
            .then((clientemis) => {
                return res.status(201).json(clientemis);
            })
            .catch((error) => {
                res.status(500).json({ message: "errooor" })
            });


    },
}