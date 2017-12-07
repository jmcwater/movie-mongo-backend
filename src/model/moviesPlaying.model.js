const mongoose = require('mongoose');
const MoviesPlayingSchema = require('./moviesPlaying.schema');

const MoviesPlaying = mongoose.model('moviesPlaying', MoviesPlayingSchema);

module.exports = MoviesPlaying;