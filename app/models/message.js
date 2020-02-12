const moongose = require('mongoose')

const MODEL_NAME = 'message'

const schema = new moongose.Schema({
  content: {
    type: String,
    required: true,
  },
  channelId: {
    type: moongose.Types.ObjectId,
    required: true,
  },
  createdBy: {
    type: moongose.Types.ObjectId,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
})

const initialize = () => moongose.model(MODEL_NAME, schema)

module.exports = {
  name: MODEL_NAME,
  initialize,
}
