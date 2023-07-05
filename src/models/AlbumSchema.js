const mongoose = require('mongoose')
const { Schema } = mongoose

const albumSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    albumCover: {
      type: String, // URL
      required: true,
    },
    tracks: [
      {
        type: mongoose.ObjectId,
        default: [],
        ref: 'Song',
      },
    ],
    releaseDate: {
      type: Number,
      required: true,
    },
    spotifyURL: {
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
    timestamps: false,
  },
)

const Album = mongoose.model('Album', albumSchema)

module.exports = Album
