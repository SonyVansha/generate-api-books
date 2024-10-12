// import "../index.css"
import CardBooks from "./cardBooks";
import axios from 'axios';
import { useState, useEffect } from 'react';

function BlogsPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ambil data dari API lokal
    axios.get(import.meta.env.VITE_API_URL)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading the books.</p>;

  return (
  <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
        <CardBooks key={book.id} book={book} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default BlogsPage;