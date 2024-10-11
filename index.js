const express = require('express');
const bookRoutes = require('./routes/bookRoutes'); // Impor rute buku
const app = express();
const port = 3000;

// Menggunakan rute yang diimpor
app.use(bookRoutes);

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
