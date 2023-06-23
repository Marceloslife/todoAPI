const Host = require('../models/host');

// GET - Mendapatkan semua host
exports.getHosts = async (req, res) => {
  try {
    const hosts = await Host.find();
    res.json(hosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data host' });
  }
};

// POST - Membuat host baru
exports.createHost = async (req, res) => {
  try {
    const host = new Host(req.body);
    const savedHost = await host.save();
    res.status(201).json(savedHost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat membuat host' });
  }
};

// PUT - Memperbarui host berdasarkan ID
exports.updateHost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHost = await Host.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedHost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui host' });
  }
};

// DELETE - Menghapus host berdasarkan ID
exports.deleteHost = async (req, res) => {
  try {
    const { id } = req.params;
    await Host.findByIdAndDelete(id);
    res.json({ message: 'Host berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus host' });
  }
};
