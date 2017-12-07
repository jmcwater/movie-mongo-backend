const mongoose = require('mongoose');
const TheatreSchema = require('./theatre.schema');

const Theatre = mongoose.model('theatre', TheatreSchema);

module.exports = Theatre;