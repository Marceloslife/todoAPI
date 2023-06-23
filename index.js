// index.js atau app.js
const express = require('express');
const mongoose = require('mongoose');
const podcastRoutes = require('./routes/podcastRoutes');
const hostRoutes = require('./routes/hostRoutes');

const app = express();
const PORT = 4000;

// Koneksi ke MongoDB Atlas
mongoose.connect('mongodb+srv://marcelo123:marcelo123@cluster0.rcoboug.mongodb.net/podcats?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Terhubung ke MongoDB Atlas');
}).catch((error) => {
  console.error('Gagal terhubung ke MongoDB Atlas:', error);
});

// Middleware
app.use(express.json());

// Routes
app.use('/podcasts', podcastRoutes);
app.use('/host', hostRoutes);

// Server listening
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
