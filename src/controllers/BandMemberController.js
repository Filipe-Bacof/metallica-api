const BandMemberRepository = require('../repositories/BandMemberRepository')

class BandMemberController {
  async index(request, response) {
    const page = Number(request.query.page)

    if (page) {
      const startIndex = (page - 1) * 10
      const bandMembers = await BandMemberRepository.findSome(startIndex)
      return response.json(bandMembers)
    }

    const bandMembers = await BandMemberRepository.findAll()

    return response.json(bandMembers)
  }

  async show(request, response) {
    const { id } = request.params

    const bandMember = await BandMemberRepository.findById(id)

    if (!bandMember)
      return response
        .status(400)
        .json({ message: 'Não foi encontrado esse membro da banda.' })

    return response
      .status(200)
      .json({ message: 'Membro da banda encontrado com sucesso!', bandMember })
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

    const isBandMemberAlreadyRegistered = await BandMemberRepository.findByName(
      name,
    )

    if (isBandMemberAlreadyRegistered)
      return response
        .status(422)
        .json({ message: 'Um membro da banda com este nome já foi cadastrado' })

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

    const updatedBandMember = await BandMemberRepository.findByIdAndUpdate(id, {
      ...(name && { name }),
      ...(picture && { picture }),
      ...(birthDate && { birthDate }),
      ...(deathDate && { deathDate }),
      ...(memberSince && { memberSince }),
      ...(bandLeaving && { bandLeaving }),
      ...(albuns && { albuns }),
      ...(instruments && { instruments }),
    })

    return response.status(200).json({
      message: 'Membro da banda atualizado com sucesso.',
      updatedBandMember,
    })
  }

  async delete(request, response) {
    const { id } = request.params

    const bandMember = await BandMemberRepository.findById(id)

    if (!bandMember)
      return response
        .status(404)
        .json({ message: 'Este membro da banda não foi encontrado.' })

    await BandMemberRepository.delete(id)

    return response
      .status(204)
      .json({ message: 'Membro da banda deletado com sucesso.' })
  }
}

module.exports = new BandMemberController()
