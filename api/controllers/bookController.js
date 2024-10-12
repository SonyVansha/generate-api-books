const createBook = require('../models/bookModel');
const formatDate = require('../utils/formatDate');
const createSlug  = require('../utils/slugCreator');

// Dapatkan semua buku
let books = createBook();

// Fungsi untuk mendapatkan daftar buku
const getBooks = (req, res) => {
  // Format tanggal setiap buku
  books = books.map(book => {
    book.publishedDate = formatDate(new Date(book.publishedDate));
    return book;
  });
  // Kirim array buku sebagai respons
  res.json(books);  
};

const getSlug = (req, res) => {
  const { slug } = req.params;

  // Temukan buku berdasarkan slug
  const book = books.find(b => createSlug(b.title) === slug);

  // Jika tidak ditemukan, kirim respons 404
  if (!book) {
      return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book); // Kirim respons buk
};

const getCreator = (req, res) => {
  const { username } = req.params;

  // Cari buku yang diterbitkan oleh Username tertentu
  const booksByUsername = books.filter(book => book.username === username);
  
  // Jika Username tidak ditemukan, kirim respons 404
  if (booksByUsername.length === 0) {
    return res.status(404).json({ message: 'Username not found' });
  }
  
  res.json(booksByUsername); // Kirim respons array buk
};

const getCategory = (req, res) => {
  const { category } = req.params;

  // Cari buku berdasarkan kategori
  const booksByCategory = books.filter(book => book.category === category);
  
  // Jika kategori tidak ditemukan, kirim respons 404
  if (booksByCategory.length === 0) {
    return res.status(404).json({ message: 'Category not found' });
  }
  
  res.json(booksByCategory); // Kirim respons array buk
}

module.exports = { getBooks, getSlug, getCreator, getCategory };
