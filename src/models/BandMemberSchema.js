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
      required: true,
    },
    birthDate: {
      type: Number,
      required: true,
    },
    deathDate: {
      type: Number,
      required: true,
    },
    memberSince: {
      type: Number,
      required: true,
    },
    bandLeaving: {
      type: Number,
      required: true,
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
      required: true,
    },
  },
  {
    timestamps: false,
  },
)

const BandMember = mongoose.model('BandMember', bandMemberSchema)

module.exports = BandMember
