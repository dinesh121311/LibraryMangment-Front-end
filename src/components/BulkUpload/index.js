import React, { useState } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button, TextField, Box } from '@mui/material';
import './index.css';

const BulkUpload = () => {
  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    price: '',
    coverImage: null,
  });

  const handleFileChange = (e) => {
    const files = e.target.files;
    const bookArray = Array.from(files).map(file => ({
      title: bookDetails.title,
      author: bookDetails.author,
      price: bookDetails.price,
      coverImage: URL.createObjectURL(file),
    }));
    setBooks([...books, ...bookArray]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Logic for uploading the books
    console.log(books);
  };

  return (
    <div className="bulk-upload-container">
      <Typography variant="h4" className="page-title">Bulk Upload Books</Typography>

      {/* Book details form */}
      <Box className="book-details-form">
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={bookDetails.title}
          onChange={handleInputChange}
          fullWidth
          className="form-field"
        />
        <TextField
          label="Author"
          variant="outlined"
          name="author"
          value={bookDetails.author}
          onChange={handleInputChange}
          fullWidth
          className="form-field"
        />
        <TextField
          label="Price"
          variant="outlined"
          name="price"
          value={bookDetails.price}
          onChange={handleInputChange}
          fullWidth
          className="form-field"
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="file-input"
        />
        <Button variant="contained" onClick={handleSubmit} className="submit-button">
          Upload Books
        </Button>
      </Box>

      {/* Display uploaded books */}
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="book-card">
              <CardMedia
                component="img"
                height="200"
                image={book.coverImage}
                alt={book.title}
                className="book-image"
              />
              <CardContent>
                <Typography variant="h6" className="book-title">{book.title}</Typography>
                <Typography variant="body2" className="book-author">Author: {book.author}</Typography>
                <Typography variant="body2" className="book-price">Price: ${book.price}</Typography>
                <Button variant="outlined">Approve</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BulkUpload;
