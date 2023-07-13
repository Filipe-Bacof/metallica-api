const Song = require('../models/SongSchema')

class SongRepository {
  async findAll() {
    const songs = await Song.find()
      .populate([
        {
          path: 'album',
          select: '_id title albumCover releaseDate spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return songs
  }

  async findRandom() {
    const random = await Song.aggregate([{ $sample: { size: 1 } }])

    const song = await Song.findOne({ _id: random[0]._id })
      .populate([
        {
          path: 'album',
          select: '_id title albumCover releaseDate spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return song
  }

  async findSome(startIndex) {
    const songs = await Song.find()
      .populate([
        {
          path: 'album',
          select: '_id title albumCover releaseDate spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .limit(3)
      .skip(startIndex)
      .lean()
      .exec()

    return songs
  }

  async findByName(title) {
    const song = await Song.findOne({ title })
      .populate([
        {
          path: 'album',
          select: '_id title albumCover releaseDate spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return song
  }

  async create({
    title,
    album,
    discTrack,
    duration,
    lyrics,
    spotifyURL,
    officialMusicVideo,
    composers,
  }) {
    const song = new Song({
      title,
      album,
      discTrack,
      duration,
      lyrics,
      spotifyURL,
      officialMusicVideo,
      composers,
    })

    await song.save()

    return song
  }

  async findByIdAndUpdate(
    id,
    {
      title,
      album,
      discTrack,
      duration,
      lyrics,
      spotifyURL,
      officialMusicVideo,
      composers,
    },
  ) {
    const song = await Song.findOneAndUpdate(
      { _id: id },
      {
        title,
        album,
        discTrack,
        duration,
        lyrics,
        spotifyURL,
        officialMusicVideo,
        composers,
      },
    )
      .populate([
        {
          path: 'album',
          select: '_id title albumCover releaseDate spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return song
  }

  async findById(id) {
    const song = await Song.findOne({ _id: id })
      .populate([
        {
          path: 'album',
          select: '_id title albumCover releaseDate spotifyURL',
        },
        {
          path: 'composers',
          select: '_id name',
        },
      ])
      .lean()
      .exec()

    return song
  }

  async delete(id) {
    await Song.findOneAndDelete({ _id: id })
  }
}

module.exports = new SongRepository()
