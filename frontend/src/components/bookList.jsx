// src/components/BookList.jsx
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookCard from './bookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ambil data dari API lokal
    axios.get('http://localhost:3000/books')
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
    <div className="book-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
