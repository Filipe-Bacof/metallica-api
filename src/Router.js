const express = require('express')
const router = express.Router()

// Rota Teste
router.get('/', (_request, response) => {
  response.send('Essa é uma rota de teste! A API está funcionando')
})

module.exports = router
