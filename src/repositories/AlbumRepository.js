const Album = require('../models/AlbumSchema')

class AlbumRepository {
  async findAll() {
    const albuns = await Album.find()
      .populate([
        {
          path: 'tracks',
          select: '_id title discTrack duration spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return albuns
  }

  async findSome(startIndex) {
    const albuns = await Album.find()
      .populate([
        {
          path: 'tracks',
          select: '_id title discTrack duration spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .limit(10)
      .skip(startIndex)
      .lean()
      .exec()

    return albuns
  }

  async findByName(title) {
    const album = await Album.findOne({ title })
      .populate([
        {
          path: 'tracks',
          select: '_id title discTrack duration spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return album
  }

  async create({
    title,
    albumCover,
    tracks,
    releaseDate,
    spotifyURL,
    composers,
  }) {
    const album = new Album({
      title,
      albumCover,
      tracks,
      releaseDate,
      spotifyURL,
      composers,
    })

    await album.save()

    return album
  }

  async findByIdAndUpdate(
    id,
    { title, albumCover, tracks, releaseDate, spotifyURL, composers },
  ) {
    const album = await Album.findOneAndUpdate(
      { _id: id },
      {
        title,
        albumCover,

        tracks,
        releaseDate,
        spotifyURL,
        composers,
      },
    )
      .populate([
        {
          path: 'tracks',
          select: '_id title discTrack duration spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return album
  }

  async findById(id) {
    const album = await Album.findOne({ _id: id })
      .populate([
        {
          path: 'tracks',
          select: '_id title discTrack duration spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return album
  }

  async delete(id) {
    await Album.findOneAndDelete({ _id: id })
  }
}

module.exports = new AlbumRepository()
