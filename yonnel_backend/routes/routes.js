const express = require('express');
const routes = express.Router()
const users = require('../controllers/users.ctrl.js')
const client = require('../controllers/client.ctrl.js')
const transaction = require('../controllers/transaction.ctrl.js')
const agence = require('../controllers/agence.ctrl.js')
const sousAgence = require('../controllers/sousAgence.ctrl.js')
const pays = require('../controllers/pays.ctrl.js')
const devise = require('../controllers/devise.ctrl.js')
const paiement = require('../controllers/paiement.ctrl.js')

routes.post('/register', users.register)
routes.post('/signIn', users.signIn)

routes.get('/users', users.getAllUsers)
routes.get('/users/:id', users.getUserById)
routes.put('/users/:id', users.updateUser)
// routes.delete('/users/:id', users.deleteUser)


routes.post('/client', client.createClient)
routes.get('/client', client.getAllClients)
routes.put('/client/:id', client.updateClient)
routes.get('/client/:id', client.getClientById)
// routes.delete('/client/:id', client.deleteClient)


routes.post('/agence', agence.createAgence)
routes.get('/agence', agence.getAllAgences)
routes.get('/agence/:id', agence.getAgenceById)
routes.put('/agence/:id', agence.updateAgence)
// routes.delete('/agence/:id', client.deleteAgence)


routes.post('/sousAgence', sousAgence.createSousAgence)
routes.get('/sousAgence', sousAgence.getAllSousAgences)
routes.get('/sousAgence/:id', sousAgence.getSousAgenceById)
routes.put('/sousAgence/:id', sousAgence.updateSousAgence)
// routes.delete('/sousAgence/:id', sousAgence.deleteSousAgence)



routes.post('/transaction', transaction.createTransaction)
routes.get('/transaction/:id', transaction.getTransactionById)
routes.get('/transaction', transaction.getAllTransactions)
routes.put('/transaction/:id', transaction.updateTransaction)
// routes.delete('/transaction', transaction.deleteTransaction)
 


routes.post('/pays', pays.createPays)
routes.get('/pays/:id', pays.getPaysById)
routes.get('/pays', pays.getAllPays)
routes.put('/pays/:id', pays.updatePays) 
// routes.delete('pays/:id', pays.deletePays)


routes.post('/devise', devise.createDevise)
routes.get('/devise/:id', devise.getDeviseById)
routes.get('/devise', devise.getAllDevise)
routes.put('/devise/:id', devise.updateDevise) 
// routes.delete('devise/:id', pays.deleteDevise)


routes.post('/paiement', paiement.createPaiement) 
routes.get('/paiement/:id', paiement.getPaiementById)
routes.get('/paiement', paiement.getAllPaiements)
routes.put('/paiement/:id', paiement.updatePaiement) 
// routes.delete('paiement/:id', pays.deletePaiement)


module.exports = routes










