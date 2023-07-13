const SongRepository = require('../repositories/SongRepository')

class SongController {
  async index(request, response) {
    const page = Number(request.query.page)

    try {
      const startIndex = ((page || 1) - 1) * 3
      const songs = await SongRepository.findSome(startIndex)
      return response.json({
        songs,
        prev:
          (Number(page) || 1) > 1
            ? 'https://bacof-metallica-api.cyclic.app/song?page=' +
              ((Number(page) || 1) - 1)
            : null,
        next:
          'https://bacof-metallica-api.cyclic.app/song?page=' +
          ((Number(page) || 1) + 1),
      })
    } catch (error) {
      console.log(error)
    }
  }

  async show(request, response) {
    const { id } = request.params
    try {
      const song = await SongRepository.findById(id)

      if (!song)
        return response
          .status(400)
          .json({ message: 'Não foi encontrada essa música.' })

      return response
        .status(200)
        .json({ message: 'Música encontrada com sucesso!', song })
    } catch (error) {
      console.log(error)
    }
  }

  async random(_request, response) {
    try {
      const song = await SongRepository.findRandom()

      return response.status(200).json(song)
    } catch (error) {
      console.log(error)
    }
  }

  async store(request, response) {
    const {
      title,
      album,
      discTrack,
      duration,
      lyrics,
      spotifyURL,
      officialMusicVideo,
      composers,
    } = request.body

    try {
      const isSongAlreadyRegistered = await SongRepository.findByName(title)

      if (isSongAlreadyRegistered)
        return response
          .status(422)
          .json({ message: 'Uma música com este nome já foi cadastrada' })

      const song = await SongRepository.create({
        title,
        album,
        discTrack,
        duration,
        ...(lyrics && { lyrics }),
        spotifyURL,
        ...(officialMusicVideo && { officialMusicVideo }),
        ...(composers && { composers }),
      })

      song.save()

      return response.status(200).json(song)
    } catch (error) {
      console.log(error)
    }
  }

  async update(request, response) {
    const { id } = request.params
    const {
      title,
      album,
      discTrack,
      duration,
      lyrics,
      spotifyURL,
      officialMusicVideo,
      composers,
    } = request.body

    try {
      await SongRepository.findByIdAndUpdate(id, {
        ...(title && { title }),
        ...(album && { album }),
        ...(discTrack && { discTrack }),
        ...(duration && { duration }),
        ...(lyrics && { lyrics }),
        ...(spotifyURL && { spotifyURL }),
        ...(officialMusicVideo && { officialMusicVideo }),
        ...(composers && { composers }),
      })

      const updatedSong = await SongRepository.findById(id)

      return response.status(200).json({
        message: 'Música atualizada com sucesso.',
        updatedSong,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async delete(request, response) {
    const { id } = request.params

    try {
      const song = await SongRepository.findById(id)

      if (!song)
        return response
          .status(404)
          .json({ message: 'Esta música não foi encontrada.' })

      await SongRepository.delete(id)

      return response
        .status(200)
        .json({ message: 'Música deletada com sucesso.' })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new SongController()
