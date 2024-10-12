const { faker } = require('@faker-js/faker');
const createSlug  = require('../utils/slugCreator');
const formatDate = require('../utils/formatDate');

// Fungsi untuk membuat data buku
const createBook = () => {
  // Array untuk menyimpan data buku
  const books = []; 

  for (let i = 0; i < 10; i++) {
    // Dapatkan tanggal acak dari masa lalu
    const randomDate = faker.date.past();
    const title = faker.commerce.productName();
    const category = faker.music.genre();
    const body = faker.lorem.paragraphs(10);

    // Memisahkan konten menjadi array paragraf
    const contentArray = body.split('\n');

    const book = {
      id: i + 1,
      title: title,
      slug: createSlug(title),
      name: faker.person.fullName(),
      username: faker.internet.userName().replace(/\s+/g, ''),
      category: category.replace(/\s+/g, ''),
      publishedDate: formatDate(randomDate), // Simpan tanggal di sini
      summary:  body.slice(0, 120),
      content: body,
      coverImage: `https://picsum.photos/200/300?random=${i}`
    };

    // Tambahkan buku ke array
    books.push(book); 
  }
  
  // Kembalikan array yang berisi semua buku
  return books;
};

module.exports = createBook;
