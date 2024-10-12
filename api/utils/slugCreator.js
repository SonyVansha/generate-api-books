// Fungsi untuk membuat slug dari title
const createSlug = (title) => {
  if (typeof title !== 'string') {
    throw new Error('Input must be a string'); // Validasi input
  }

  return title
    .toLowerCase()                        // Ubah huruf menjadi lowercase
    .replace(/[^a-z0-9\s]/g, '')         // Hapus karakter non-alphanumerik kecuali spasi
    .replace(/\s+/g, '-')                 // Ganti spasi dengan tanda hubung
    .trim();                              // Hapus spasi di awal/akhir string
};

module.exports = createSlug;
