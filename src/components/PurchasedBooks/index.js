import React from 'react';
import { Typography, Card, CardMedia, CardContent, Grid, Divider } from '@mui/material';
import './index.css';

const PurchasedBooks = ({ purchasedBooks }) => {
  return (
    <div className="purchased-books-container">
      <Typography variant="h4" className="page-title">Purchased Books</Typography>
      <Grid container spacing={3}>
        {purchasedBooks.map((book) => (
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
                <Typography variant="body2" className="purchase-date">Purchased on: {book.purchaseDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider className="page-divider" />
    </div>
  );
};

export default PurchasedBooks;
