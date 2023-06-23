// controllers/podcastController.js
const Podcast = require('../models/podcast');

// GET - Mendapatkan semua podcast
exports.getPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data podcast' });
  }
};

// POST - Membuat podcast baru
exports.createPodcast = async (req, res) => {
  try {
    const podcast = new Podcast(req.body);
    const savedPodcast = await podcast.save();
    res.status(201).json(savedPodcast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat membuat podcast' });
  }
};

// PUT - Memperbarui podcast berdasarkan ID
exports.updatePodcast = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPodcast = await Podcast.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPodcast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui podcast' });
  }
};

// DELETE - Menghapus podcast berdasarkan ID
exports.deletePodcast = async (req, res) => {
  try {
    const { id } = req.params;
    await Podcast.findByIdAndDelete(id);
    res.json({ message: 'Podcast berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus podcast' });
  }
};
