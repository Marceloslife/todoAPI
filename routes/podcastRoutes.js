// routes/podcastRoutes.js
const express = require('express');
const router = express.Router();
const podcastController = require('../controllers/podcastController');

// GET - Mendapatkan semua podcast
router.get('/', podcastController.getPodcasts);

// POST - Membuat podcast baru
router.post('/', podcastController.createPodcast);

// PUT - Memperbarui podcast berdasarkan ID
router.put('/:id', podcastController.updatePodcast);

// DELETE - Menghapus podcast berdasarkan ID
router.delete('/:id', podcastController.deletePodcast);

module.exports = router;
