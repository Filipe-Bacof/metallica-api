const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')

// User Routes
router.post('/auth/register', UserController.register)
router.post('/auth/login', UserController.login)
router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.deleteUser)

// Rota Teste
router.get('/', (_request, response) => {
  response.send('Essa é uma rota de teste! A API está funcionando')
})

module.exports = router
