const AlbumRepository = require('../repositories/AlbumRepository')

class AlbumController {
  async index(request, response) {
    const page = Number(request.query.page)

    try {
      if (page) {
        const startIndex = (page - 1) * 10
        const albuns = await AlbumRepository.findSome(startIndex)
        return response.json(albuns)
      }

      const albuns = await AlbumRepository.findAll()

      return response.json(albuns)
    } catch (error) {
      console.log(error)
    }
  }

  async show(request, response) {
    const { id } = request.params

    try {
      const album = await AlbumRepository.findById(id)

      if (!album)
        return response
          .status(400)
          .json({ message: 'Não foi encontrado esse album.' })

      return response
        .status(200)
        .json({ message: 'Album encontrado com sucesso!', album })
    } catch (error) {
      console.log(error)
    }
  }

  async store(request, response) {
    const { title, albumCover, tracks, releaseDate, spotifyURL, composers } =
      request.body

    try {
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
    } catch (error) {
      console.log(error)
    }
  }

  async update(request, response) {
    const { id } = request.params
    const { title, albumCover, tracks, releaseDate, spotifyURL, composers } =
      request.body

    try {
      await AlbumRepository.findByIdAndUpdate(id, {
        ...(title && { title }),
        ...(albumCover && { albumCover }),
        ...(tracks && { tracks }),
        ...(releaseDate && { releaseDate }),
        ...(spotifyURL && { spotifyURL }),
        ...(composers && { composers }),
      })

      const updatedAlbum = await AlbumRepository.findById(id)

      return response.status(200).json({
        message: 'Album atualizado com sucesso.',
        updatedAlbum,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async delete(request, response) {
    const { id } = request.params

    try {
      const album = await AlbumRepository.findById(id)

      if (!album)
        return response
          .status(404)
          .json({ message: 'Este album não foi encontrado.' })

      await AlbumRepository.delete(id)

      return response
        .status(200)
        .json({ message: 'Album deletado com sucesso.' })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new AlbumController()
