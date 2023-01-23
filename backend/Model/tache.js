const mongoose = require('mongoose')

const tacheSchema = mongoose.Schema(
  {
    titre: {
      type: String,
      required: [true, 'Please add a titre'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],

    },
    duree: {
      type: String,
      required: [true, 'Please add a duree'],
    },
    couleur: {
        type: String,
        required: [true, 'Please add a couleur'],
      },
      code: {
        type: String,
        required: [true, 'Please add a code'],
      },
      status: {
        type: String,
        required: [true, 'Please add a password'],
      },

  },
  {
    collection: 'tasks'
  }
  
)

module.exports = mongoose.model('tache', tacheSchema)