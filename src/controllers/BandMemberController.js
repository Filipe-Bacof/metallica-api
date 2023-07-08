const BandMemberRepository = require('../repositories/BandMemberRepository')

class BandMemberController {
  async index(request, response) {
    const page = Number(request.query.page)

    try {
      if (page) {
        const startIndex = (page - 1) * 10
        const bandMembers = await BandMemberRepository.findSome(startIndex)
        return response.json(bandMembers)
      }

      const bandMembers = await BandMemberRepository.findAll()

      return response.json(bandMembers)
    } catch (error) {
      console.log(error)
    }
  }

  async show(request, response) {
    const { id } = request.params

    try {
      const bandMember = await BandMemberRepository.findById(id)

      if (!bandMember)
        return response
          .status(400)
          .json({ message: 'Não foi encontrado esse membro da banda.' })

      return response.status(200).json({
        message: 'Membro da banda encontrado com sucesso!',
        bandMember,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async store(request, response) {
    const {
      name,
      picture,
      birthDate,
      deathDate,
      memberSince,
      bandLeaving,
      albuns,
      instruments,
    } = request.body

    try {
      const isBandMemberAlreadyRegistered =
        await BandMemberRepository.findByName(name)

      if (isBandMemberAlreadyRegistered)
        return response.status(422).json({
          message: 'Um membro da banda com este nome já foi cadastrado',
        })

      const bandMember = await BandMemberRepository.create({
        name,
        ...(picture && { picture }),
        birthDate,
        ...(deathDate && { deathDate }),
        memberSince,
        ...(bandLeaving && { bandLeaving }),
        ...(albuns && { albuns }),
        ...(instruments && { instruments }),
      })

      bandMember.save()

      return response.status(200).json(bandMember)
    } catch (error) {
      console.log(error)
    }
  }

  async update(request, response) {
    const { id } = request.params
    const {
      name,
      picture,
      birthDate,
      deathDate,
      memberSince,
      bandLeaving,
      albuns,
      instruments,
    } = request.body

    try {
      await BandMemberRepository.findByIdAndUpdate(id, {
        ...(name && { name }),
        ...(picture && { picture }),
        ...(birthDate && { birthDate }),
        ...(deathDate && { deathDate }),
        ...(memberSince && { memberSince }),
        ...(bandLeaving && { bandLeaving }),
        ...(albuns && { albuns }),
        ...(instruments && { instruments }),
      })

      const updatedBandMember = await BandMemberRepository.findById(id)

      return response.status(200).json({
        message: 'Membro da banda atualizado com sucesso.',
        updatedBandMember,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async delete(request, response) {
    const { id } = request.params
    try {
      const bandMember = await BandMemberRepository.findById(id)

      if (!bandMember)
        return response
          .status(404)
          .json({ message: 'Este membro da banda não foi encontrado.' })

      await BandMemberRepository.delete(id)

      return response
        .status(200)
        .json({ message: 'Membro da banda deletado com sucesso.' })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new BandMemberController()
