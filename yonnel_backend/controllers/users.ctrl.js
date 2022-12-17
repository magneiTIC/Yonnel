const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models').Users;

module.exports = {
    async register(req, res) {
        try {
            const { login, password, SousAgenceId } = req.body;
            const userExist = await User.findOne({ where: { login: login } })
            if (!(login && password && SousAgenceId)) {
                res.status(400).send("Tous les champs sont requis!!!")
            } else if (userExist) {
                return res.status(400).send("L'utilisateur existe déjà!!!")
            }
            else {
                bcryptedPwd = await bcrypt.hash(password, 10)
                const newUser = await User.create({
                    login: login,
                    password: bcryptedPwd,
                    status: req.body.status,
                    SousAgenceId: SousAgenceId
                })
                res.status(201).json(newUser)
            }
        } catch (error) {
            res.status(500).json({ 'erreur': 'ajout impossible' })
        }
    },

    async signIn(req, res) {
        try {
            const { login, password } = req.body
            const user = await User.findOne({ where: { login: login } })
            console.log(user)

            if (!(login && password)) {
                res.status(400).send("Tous les champs sont requis!!!")
            }
            if (!user) {
                res.status(400).send("user not found")
            }
            else if (login && (await bcrypt.compare(password, user.password))) {
                const token = jwt.sign(
                    { login: user.login,
                      status:user.status,
                      id:user.id
                    },
                    'secret',
                    {
                        expiresIn: '1h'
                    }
                )
                user.key = token;
                return res.status(201).send({token,user});
            } else {
                res.status(400).send("Informations invalides !!!");
            }
        } catch (error) {
            console.log(error)
        }
    },

    async getUserById(req, res) {
        res.status(200).json(await User.findByPk(req.params.id))
    },

    async getAllUsers(req, res) {
        const total = await User.count()
        await User.findAll()
            .then(user => {
                res.status(200).json({user,total})
            })
            .catch(error => {
                res.status(500).send(error.message)
            })
    },

    async updateUser(req, res) {
        await User.update(req.body, { where: { id: req.params.id } })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(error => { res.status(500).send(error) })

    },

}

