import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Card, CardMedia, CardContent, TextField, Rating, Divider, Grid } from '@mui/material';
import './index.css';

const BookDetails = ({ books, reviews }) => {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === bookId);
  const bookReviews = reviews.filter((review) => review.bookId === bookId);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = () => {
    // Logic to handle review submission (e.g., sending it to backend)
    console.log({ rating, comment });
  };

  const handlePurchase = () => {
    // Logic to handle book purchase (e.g., navigating to a purchase page)
    console.log('Purchase initiated for book:', book.title);
  };

  return (
    <div className="book-details-container">
      <Card className="book-card">
        <CardMedia
          component="img"
          height="400"
          image={book.coverImage}
          alt={book.title}
          className="book-image"
        />
        <CardContent>
          <Typography variant="h5" className="book-title">{book.title}</Typography>
          <Typography variant="body1" className="book-author">Author: {book.author}</Typography>
          <Typography variant="body2" className="book-price">Price: ${book.price}</Typography>
          <Typography variant="body2" className="book-description">{book.description}</Typography>
          <Typography variant="h6" className="book-rating">
            Rating: <Rating value={book.rating} readOnly />
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          className="purchase-btn"
          onClick={handlePurchase}
          style={{ margin: '10px' }}
        >
          Purchase Book
        </Button>
      </Card>

      <Divider className="divider" />

      <div className="reviews-section">
        <Typography variant="h6" className="reviews-title">Reviews</Typography>
        {bookReviews.map((review, index) => (
          <div key={index} className="review-item">
            <Typography variant="body2" className="review-text">
              {review.user}: {review.comment} - {review.rating} ★
            </Typography>
          </div>
        ))}

        <Divider className="divider" />

        <Typography variant="h6" className="leave-review-title">Leave a Review</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Comment"
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              fullWidth
              className="review-comment"
            />
          </Grid>
        </Grid>
        <Button  style={{ margin: '10px' }} variant="contained" className="submit-btn" onClick={handleSubmitReview}>Submit</Button>
      </div>
    </div>
  );
};

export default BookDetails;
