const mongoose = require('mongoose')
const { Schema } = mongoose

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    album: {
      type: mongoose.ObjectId,
      required: true,
      ref: 'Album',
    },
    discTrack: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    lyrics: {
      type: String,
    },
    spotifyURL: {
      type: String,
      required: true,
    },
    officialMusicVideo: {
      type: String,
      required: true,
    },
    composers: [
      {
        type: mongoose.ObjectId,
        default: [],
        ref: 'BandMember',
      },
    ],
  },
  {
    timestamps: true,
  },
)

const Song = mongoose.model('Song', songSchema)

module.exports = Song
