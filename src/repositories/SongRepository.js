const Song = require('../models/SongSchema')

class SongRepository {
  async findAll() {
    const songs = await Song.find().lean().exec()

    return songs
  }

  async findSome(startIndex) {
    const songs = await Song.find().limit(10).skip(startIndex).lean().exec()

    return songs
  }

  async findByName(title) {
    const song = await Song.findOne({ title }).lean().exec()

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
      .lean()
      .exec()

    return song
  }

  async findById(id) {
    const song = await Song.findOne({ _id: id }).lean().exec()

    return song
  }

  async delete(id) {
    await Song.findOneAndDelete({ _id: id })
  }
}

module.exports = new SongRepository()
