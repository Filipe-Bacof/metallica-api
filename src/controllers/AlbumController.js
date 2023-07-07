const AlbumRepository = require('../repositories/AlbumRepository')

class AlbumController {
  async index(request, response) {
    const page = Number(request.query.page)

    if (page) {
      const startIndex = (page - 1) * 10
      const albuns = await AlbumRepository.findSome(startIndex)
      return response.json(albuns)
    }

    const albuns = await AlbumRepository.findAll()

    return response.json(albuns)
  }

  async show(request, response) {
    const { id } = request.params

    const album = await AlbumRepository.findById(id)

    if (!album)
      return response
        .status(400)
        .json({ message: 'Não foi encontrado esse album.' })

    return response
      .status(200)
      .json({ message: 'Album encontrado com sucesso!', album })
  }

  async store(request, response) {
    const { title, albumCover, tracks, releaseDate, spotifyURL, composers } =
      request.body

    const isAlbumAlreadyRegistered = await AlbumRepository.findByName(title)

    if (isAlbumAlreadyRegistered)
      return response
        .status(422)
        .json({ message: 'Um album com este nome já foi cadastrado' })

    const album = await AlbumRepository.create({
      title,
      albumCover,
      ...(tracks && { tracks }),
      releaseDate,
      spotifyURL,
      composers,
    })

    album.save()

    return response.status(200).json(album)
  }

  async update(request, response) {
    const { id } = request.params
    const { title, albumCover, tracks, releaseDate, spotifyURL, composers } =
      request.body

    const updatedAlbum = await AlbumRepository.findByIdAndUpdate(id, {
      ...(title && { title }),
      ...(albumCover && { albumCover }),
      ...(tracks && { tracks }),
      ...(releaseDate && { releaseDate }),
      ...(spotifyURL && { spotifyURL }),
      ...(composers && { composers }),
    })

    return response.status(200).json({
      message: 'Album atualizado com sucesso.',
      updatedAlbum,
    })
  }

  async delete(request, response) {
    const { id } = request.params

    const album = await AlbumRepository.findById(id)

    if (!album)
      return response
        .status(404)
        .json({ message: 'Este album não foi encontrado.' })

    await AlbumRepository.delete(id)

    return response.status(200).json({ message: 'Album deletado com sucesso.' })
  }
}

module.exports = new AlbumController()
