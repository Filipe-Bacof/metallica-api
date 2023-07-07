const express = require('express')
const router = express.Router()
const verifyTokenJwt = require('./middlewares/verifyTokenJwt')
const UserController = require('./controllers/UserController')
const BandMemberController = require('./controllers/BandMemberController')
const AlbumController = require('./controllers/AlbumController')

// User Routes
router.post('/auth/register', verifyTokenJwt, UserController.register)
router.post('/auth/login', UserController.login)
router.get('/users', verifyTokenJwt, UserController.index)
router.get('/users/:id', verifyTokenJwt, UserController.show)
router.put('/users/:id', verifyTokenJwt, UserController.update)
router.delete('/users/:id', verifyTokenJwt, UserController.deleteUser)

// Band Member Routes
router.get('/member', BandMemberController.index)
router.get('/member/:id', BandMemberController.show)
router.post('/member', verifyTokenJwt, BandMemberController.store)
router.put('/member/:id', verifyTokenJwt, BandMemberController.update)
router.delete('/member/:id', verifyTokenJwt, BandMemberController.delete)

// Album Routes
router.get('/album', AlbumController.index)
router.get('/album/:id', AlbumController.show)
router.post('/album', verifyTokenJwt, AlbumController.store)
router.put('/album/:id', verifyTokenJwt, AlbumController.update)
router.delete('/album/:id', verifyTokenJwt, AlbumController.delete)

// Rota Teste
router.get('/', (_request, response) => {
  response.send('Essa é uma rota de teste! A API está funcionando')
})

module.exports = router
