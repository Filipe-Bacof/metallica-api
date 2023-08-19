const AlbumRepository = require('../repositories/AlbumRepository')
const BandMemberRepository = require('../repositories/BandMemberRepository')

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

      await album.save()
      const composerPromises = composers.map(async (idComposer) => {
        try {
          const bandMember = await BandMemberRepository.findById(idComposer)
          if (!bandMember) {
            console.log(`Band member with ID ${idComposer} not found.`)
            return null
          }
          const albunsOnMemberUpdated = [...bandMember.albuns, album._id]
          await BandMemberRepository.findByIdAndUpdate(idComposer, {
            albuns: albunsOnMemberUpdated,
          })
          return idComposer
        } catch (error) {
          console.log(`Error updating band member ${idComposer}:`, error)
          return null
        }
      })

      await Promise.all(composerPromises)

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
      const updatedFields = {
        ...(title && { title }),
        ...(albumCover && { albumCover }),
        ...(tracks && { tracks }),
        ...(releaseDate && { releaseDate }),
        ...(spotifyURL && { spotifyURL }),
        ...(composers && { composers }),
      }

      await AlbumRepository.findByIdAndUpdate(id, updatedFields)

      const updatedAlbum = await AlbumRepository.findById(id)

      return response.status(200).json({
        message: 'Album atualizado com sucesso.',
        updatedAlbum,
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: 'Erro interno do servidor' })
    }
  }

  async delete(request, response) {
    const { id } = request.params

    try {
      const album = await AlbumRepository.findById(id)

      if (!album) {
        return response.status(404).json({ message: 'Album não encontrado.' })
      }

      // const composerPromises = album.composers.map(async (idComposer) => {
      //   try {
      //     const bandMember = await BandMemberRepository.findById(idComposer)
      //     if (bandMember) {
      //       bandMember.albuns = bandMember.albuns.filter(
      //         (albumId) => albumId.toString() !== id,
      //       )
      //       await bandMember.save()
      //     }
      //     return idComposer
      //   } catch (error) {
      //     console.log(`Error updating band member ${idComposer}:`, error)
      //     return null
      //   }
      // })

      // await Promise.all(composerPromises)

      await AlbumRepository.delete(id)

      return response
        .status(200)
        .json({ message: 'Album deletado com sucesso.' })
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = new AlbumController()
