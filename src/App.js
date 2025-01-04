import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import PurchasedBooks from './components/PurchasedBooks';
import UploadBook from './components/UploadBook';
import ManageBooks from './components/ManageBooks';
import BulkUpload from './components/BulkUpload';
import ManageUsers from './components/ManageUsers';

function App() {
  const [userRole, setUserRole] = useState('librarian'); // Tracks user role: "student", "author", or "librarian"

  // Fixture data for Books, Purchased Books, Reviews, etc.
  const fixtureBooks = [
    {
      "id": "1",
      "title": "Book Title 1",
      "author": "Author 1",
      "description": "A brief description of the book.",
      "price": 12.99,
      "coverImage": "https://example.com/book1.jpg",
      "rating": 4.5
    },
    {
      "id": "2",
      "title": "Book Title 2",
      "author": "Author 2",
      "description": "A brief description of the book.",
      "price": 15.99,
      "coverImage": "https://example.com/book2.jpg",
      "rating": 4.2
    }
  ];

  const fixturePurchasedBooks = [
    {
      "id": "1",
      "title": "Book Title 1",
      "author": "Author 1",
      "price": 12.99,
      "coverImage": "https://example.com/book1.jpg",
      "purchaseDate": "2024-12-01"
    }
  ];

  const fixtureReviews = [
    { bookId: '1', user: 'Student A', rating: 4, comment: 'Great book!' },
    { bookId: '1', user: 'Student A', rating: 4, comment: 'Great book!' },
    { bookId: '2', user: 'Student B', rating: 5, comment: 'Amazing!' }
  ];

  const fixtureAuthorBooks = [
    { id: '1', title: 'Book Title 1', author: 'Author 1', description: 'A brief description of the book.', price: 12.99, coverImage: 'https://example.com/book1.jpg' },
    { id: '3', title: 'New Author Book', author: 'Author 1', description: 'A new book uploaded by the author.', price: 18.99, coverImage: 'https://example.com/newbook.jpg' }
  ];

  const fixtureBulkUploadBooks = [
    { title: 'Bulk Upload Book 1', author: 'Author 1', description: 'A bulk upload book.', price: 22.99, coverImage: 'https://example.com/bulk1.jpg' },
    { title: 'Bulk Upload Book 2', author: 'Author 2', description: 'Another bulk upload book.', price: 18.99, coverImage: 'https://example.com/bulk2.jpg' }
  ];

  const fixtureUsers = [
    { id: '1', name: 'Student A', role: 'Student', email: 'studenta@example.com' },
    { id: '2', name: 'Author 1', role: 'Author', email: 'author1@example.com' }
  ];

  return (
    <Router>
      <div className="App">
        {userRole && <Header role={userRole} />}
        <Routes>
          <Route path="/" element={<Login setUserRole={setUserRole} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={<Books books={fixtureBooks} />} />
          <Route path="/books/:bookId" element={<BookDetails books={fixtureBooks} reviews={fixtureReviews} />} />
          <Route path="/purchased-books" element={<PurchasedBooks purchasedBooks={fixturePurchasedBooks} />} />
          <Route path="/author/upload-book" element={<UploadBook />} />
          <Route path="/author/manage-books" element={<ManageBooks authorBooks={fixtureAuthorBooks} />} />
          <Route path="/librarian/bulk-upload" element={<BulkUpload bulkUploadBooks={fixtureBulkUploadBooks} />} />
          <Route path="/librarian/manage-users" element={<ManageUsers users={fixtureUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
