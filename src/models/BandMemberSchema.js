const mongoose = require('mongoose')
const { Schema } = mongoose

const bandMemberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String, // URL
    },
    birthDate: {
      type: Number,
      required: true,
    },
    deathDate: {
      type: Number,
    },
    memberSince: {
      type: Number,
      required: true,
    },
    bandLeaving: {
      type: Number,
    },
    albuns: [
      {
        type: mongoose.ObjectId,
        default: [],
        ref: 'Album',
      },
    ],
    instruments: {
      type: [String],
    },
  },
  {
    timestamps: false,
  },
)

const BandMember = mongoose.model('BandMember', bandMemberSchema)

module.exports = BandMember
