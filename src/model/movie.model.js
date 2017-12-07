const mongoose = require('mongoose');
const TheatreSchema = require('./theatre.schema');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'name is required.'],
    unique: true,
  },
  description: {
    type: String,
    validate: {
      validator: (description) => description.length < 300,
      message: 'description max length is 300 characters.'
    },
    required: [true, 'description is required.'],
  },
  imagePath: {
    type: String
  },
  theathres: {
    type: [TheatreSchema],
    // required: [true, 'ingredients are required.']
  }
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
