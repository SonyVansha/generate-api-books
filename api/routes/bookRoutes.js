const express = require('express');
const { getBooks, getSlug, getCreator, getCategory } = require('../controllers/bookController'); // Impor controller
const cors = require('cors');
const router = express.Router();

router.use(cors({
  // Ganti dengan URL frontend Anda
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Rute untuk mendapatkan data buku
router.get('/books', getBooks);

router.get('/books/:slug', getSlug);

router.get('/authors/:username', getCreator);

router.get('/categories/:category', getCategory);

module.exports = router;