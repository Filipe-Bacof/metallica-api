const User = require('../models/UserSchema')

class UserRepository {
  async findAll() {
    const users = await User.find().lean().exec()

    return users
  }

  async findSome(startIndex) {
    const users = await User.find().limit(10).skip(startIndex).exec()

    return users
  }

  async findByIdAndUpdate({ id, name, email, password }) {
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        password,
        updatedAt: Date.now(),
      },
    )

    await user.save()
    return user
  }

  async findById(id) {
    const user = await User.findOne({ _id: id }).lean().exec()

    return user
  }

  async findByEmail(email) {
    const user = await User.findOne({ email }).lean().exec()

    return user
  }

  async create({ name, email, password }) {
    const user = new User({
      name,
      email,
      password,
    })

    await user.save()
    return user
  }

  async delete(id) {
    return await User.findOneAndDelete({ _id: id })
  }
}

module.exports = new UserRepository()
