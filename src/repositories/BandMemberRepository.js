const BandMember = require('../models/BandMemberSchema')

class BandMemberRepository {
  async findAll() {
    const bandMembers = await BandMember.find().lean().exec()

    return bandMembers
  }

  async findSome(startIndex) {
    const bandMembers = await BandMember.find()
      .limit(10)
      .skip(startIndex)
      .lean()
      .exec()

    return bandMembers
  }

  async findByName(name) {
    const bandMember = await BandMember.findOne({ name }).lean().exec()

    return bandMember
  }

  async create({
    name,
    picture,
    birthDate,
    deathDate,
    memberSince,
    bandLeaving,
    albuns,
    instruments,
  }) {
    const bandMember = new BandMember({
      name,
      picture,
      birthDate,
      deathDate,
      memberSince,
      bandLeaving,
      albuns,
      instruments,
    })

    await bandMember.save()

    return bandMember
  }

  async findByIdAndUpdate(
    id,
    {
      name,
      picture,
      birthDate,
      deathDate,
      memberSince,
      bandLeaving,
      albuns,
      instruments,
    },
  ) {
    const bandMember = await BandMember.findOneAndUpdate(
      { _id: id },
      {
        name,
        picture,
        birthDate,
        deathDate,
        memberSince,
        bandLeaving,
        albuns,
        instruments,
      },
    )
      .lean()
      .exec()

    return bandMember
  }

  async findById(id) {
    const bandMember = await BandMember.findOne({ _id: id }).lean().exec()

    return bandMember
  }

  async delete(id) {
    await BandMember.findOneAndDelete({ _id: id })
  }
}

module.exports = new BandMemberRepository()
