// src/components/BookCard.jsx
// import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <div className="book-card" style={{ border: '1px solid #ccc', margin: '20px', padding: '15px', borderRadius: '8px' }}>
      <img src={book.coverImage} alt={book.title} style={{ width: '200px', height: '300px' }} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Published:</strong> {new Date(book.publishedDate).toDateString()}</p>
      <p>{book.summary}</p>
    </div>
  );
};

// 
BookCard.propTypes = {
  book: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
