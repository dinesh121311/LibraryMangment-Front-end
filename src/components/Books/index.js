import React from 'react';
import { Card, CardMedia, CardContent, Typography, Rating, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';

const Books = ({ books }) => {
  return (
    <div className="books-container">
      <Typography variant="h4" className="books-header">Books</Typography>
      <Grid container spacing={3} className="books-grid">
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card className="book-card">
              <CardMedia
                component="img"
                height="250"
                image={book.coverImage}
                alt={book.title}
                className="book-image"
              />
              <CardContent className="book-content">
                <Typography variant="h6" className="book-title">{book.title}</Typography>
                <Typography variant="body2" className="book-author">Author: {book.author}</Typography>
                <Typography variant="body2" className="book-price">Price: ${book.price}</Typography>
                <Rating value={book.rating} readOnly className="book-rating" />
                <Link to={`/books/${book.id}`} className="book-link">
                  <Button variant="contained" className="view-details-btn">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Books;
