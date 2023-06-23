// models/podcast.js
const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Podcast', podcastSchema);
