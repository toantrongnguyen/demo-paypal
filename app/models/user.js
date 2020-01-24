const moongose = require('mongoose')

const MODEL_NAME = 'user'

const schema = new moongose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
})

const initialize = () => moongose.model(MODEL_NAME, schema)

module.exports = {
  name: MODEL_NAME,
  initialize,
}