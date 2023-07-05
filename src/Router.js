const express = require('express')
const router = express.Router()
const verifyTokenJwt = require('./middlewares/verifyTokenJwt')
const UserController = require('./controllers/UserController')

// User Routes
router.post('/auth/register', verifyTokenJwt, UserController.register)
router.post('/auth/login', UserController.login)
router.get('/users', verifyTokenJwt, UserController.index)
router.get('/users/:id', verifyTokenJwt, UserController.show)
router.put('/users/:id', verifyTokenJwt, UserController.update)
router.delete('/users/:id', verifyTokenJwt, UserController.deleteUser)

// Rota Teste
router.get('/', (_request, response) => {
  response.send('Essa é uma rota de teste! A API está funcionando')
})

module.exports = router
