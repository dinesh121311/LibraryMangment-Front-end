import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const ManageBooks = ({ authorBooks }) => {
  return (
    <div>
      <Typography variant="h4">Manage Books</Typography>
      <Grid container spacing={2}>
        {authorBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={book.coverImage}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2">Author: {book.author}</Typography>
                <Typography variant="body2">Price: ${book.price}</Typography>
                <Button variant="outlined">Edit</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageBooks;
