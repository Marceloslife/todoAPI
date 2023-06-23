const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  keahlian: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Host', hostSchema);
