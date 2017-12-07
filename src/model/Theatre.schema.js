const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TheatreSchema = new Schema({
  birthday: {
    type: Date,
    required: [true, 'ingredient name is required.']
  },
  amount: {
    type: Number,
    required: [true, 'ingredient amount is required.']
  }
});

module.exports = TheatreSchema;
