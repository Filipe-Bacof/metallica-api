const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRepository = require('../repositories/UserRepository')

class UsersController {
  async index(_request, response) {
    try {
      const users = await UserRepository.findAll()
      return response.json(users)
    } catch (error) {
      console.log(error)
    }
  }

  async show(request, response) {
    const { id } = request.params

    try {
      const user = await UserRepository.findById(id)

      if (!user)
        return response.status(400).json({ message: 'Usuário não encontrado.' })

      return response
        .status(200)
        .json({ message: 'Usuário encontrado com sucesso', user })
    } catch (error) {
      console.log(error)
      return response.status(400).json({ message: 'Usuário não encontrado.' })
    }
  }

  async register(request, response) {
    const { name, email, password } = request.body

    if (!name || !email || !password) {
      return response
        .status(422)
        .json({ message: 'Estão faltando campos obrigatórios para o cadastro' })
    }

    try {
      const isUserAlreadyRegistered = await UserRepository.findByEmail(email)
      if (isUserAlreadyRegistered)
        return response
          .status(422)
          .json({ message: 'Esse usuário já foi cadastrado' })

      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(password, salt)

      const user = await UserRepository.create({
        name,
        email,
        password: passwordHash,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })

      return response
        .status(200)
        .json({ message: 'Usuário criado com sucesso', user })
    } catch (error) {
      console.log(error)
    }
  }

  async login(request, response) {
    const { email, password } = request.body
    try {
      const user = await UserRepository.findByEmail(email)

      if (!user)
        return response
          .status(400)
          .json({ message: 'Algo deu errado com o login.' })

      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      if (!isPasswordCorrect)
        return response
          .status(400)
          .json({ message: 'Algo deu errado com o login.' })

      try {
        const { JWT_SECRET } = process.env
        const token = jwt.sign(
          {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          JWT_SECRET,
          {
            expiresIn: '96h',
          },
        )

        const { _id, name, email } = user

        response.status(200).cookie('token', token, { httpOnly: true }).json({
          message: 'Usuário logado com sucesso',
          user: {
            _id,
            name,
            email,
          },
          token,
        })
      } catch (error) {
        console.log(error)
        return response.send(400).json('Algo deu errado com o login.')
      }
    } catch (error) {
      console.log(error)
      return response.send(400).json('Algo deu errado com o login.')
    }
  }

  async update(request, response) {
    const { id } = request.params
    const { name, email, password } = request.body

    try {
      try {
        const user = await UserRepository.findById(id)

        if (!user)
          return response
            .status(404)
            .json({ message: 'Este usuário não foi encontrado.' })
      } catch (error) {
        console.log(error)
        return response
          .status(404)
          .json({ message: 'Erro! Este usuário não foi encontrado.' })
      }

      let updatedUser = {
        id,
        ...(name && { name }),
        ...(email && { email }),
      }

      if (password && password.trim() !== '') {
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        updatedUser.password = passwordHash
      }

      updatedUser = await UserRepository.findByIdAndUpdate(updatedUser)

      const userWithUpdates = await UserRepository.findById(id)

      return response
        .status(200)
        .json({ message: 'Usuário atualizado com sucesso.', userWithUpdates })
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(request, response) {
    const { id } = request.params

    try {
      const user = await UserRepository.findById(id)

      if (!user) {
        return response
          .status(404)
          .json({ message: 'Este usuário não foi encontrado.' })
      }

      await UserRepository.delete(id)

      return response
        .status(200)
        .json({ message: 'Usuário deletado com sucesso.' })
    } catch (error) {
      console.error('Erro durante a exclusão do usuário:', error)
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro durante a exclusão do usuário.' })
    }
  }
}

module.exports = new UsersController()
