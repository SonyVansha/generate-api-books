const express = require('express');
// Impor rute buku
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

// Menggunakan rute yang diimpor
app.use(bookRoutes);

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
