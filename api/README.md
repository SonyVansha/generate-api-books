# Generate API Books

This repository serves as a comprehensive toolkit for generating robust and efficient APIs specifically designed to interact with book-related data. It provides a streamlined and customizable framework to create RESTful APIs that can perform various operations on books

## Installation
To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage
To start the server, run the following command:

**Development**:

```bash
npm run dev
```

**Production**:

```bash
npm run start
```

## API Endpoints
Here are the main API endpoints available:

- `GET /books` - Retrieve a list of all books.
- `GET /books/{id}` - Retrieve a specific book by ID.
- `GET /books/{slugBook}` - Retrieve a specific book by slug.
- `GET /authors/{username}` - Retrieve a specific book by username.
- `GET /categories/{category}` - Retrieve a list of all books by category.
- [ on going ] `POST /books` - Add a new book.
- [ on going ] `PUT /books/:id` - Update a book by ID.
- [ on going ] `DELETE /books/:id` - Delete a book by ID.

## Example
Here is an example of how to retrieve all books using curl:

```bash
curl -X GET http://localhost:3000/books
```
