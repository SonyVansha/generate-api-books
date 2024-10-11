const express = require('express');
const { getBooks, getSlug, getCreator, getCategory } = require('../controllers/bookController'); // Impor controller
const router = express.Router();

// Rute untuk mendapatkan data buku
router.get('/books', getBooks);

router.get('/books/:slug', getSlug);

router.get('/authors/:username', getCreator);

router.get('/categories/:category', getCategory);

module.exports = router;