const jwt = require('jsonwebtoken')

const verifyTokenJwt = (request, response, next) => {
  const authHeader = request.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return response.status(401).json({ message: 'Acesso negado!' })

  try {
    const { JWT_SECRET } = process.env

    jwt.verify(token, JWT_SECRET)

    next()
  } catch (err) {
    response.clearCookie('token')
    response.status(400).json({ message: 'Este token é inválido!' })
  }
}

module.exports = verifyTokenJwt
