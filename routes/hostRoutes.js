const express = require('express');
const router = express.Router();
const hostController = require('../controllers/hostController');

// GET - Mendapatkan semua host
router.get('/', hostController.getHosts);

// POST - Membuat host baru
router.post('/', hostController.createHost);

// PUT - Memperbarui host berdasarkan ID
router.put('/:id', hostController.updateHost);

// DELETE - Menghapus host berdasarkan ID
router.delete('/:id', hostController.deleteHost);

module.exports = router;
