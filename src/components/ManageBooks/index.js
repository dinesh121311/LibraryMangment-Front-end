import React, { useState } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button, TextField } from '@mui/material';

const ManageBooks = ({ authorBooks }) => {
  const [editableBookId, setEditableBookId] = useState(null);
  const [editedBookDetails, setEditedBookDetails] = useState({});

  const handleEditClick = (book) => {
    setEditableBookId(book.id);
    setEditedBookDetails({ ...book });
  };

  const handleSaveClick = (bookId) => {
    setEditableBookId(null);
    // Logic to save the edited details, e.g., sending it to the backend
    console.log('Saved book details:', editedBookDetails);
  };

  const handleChange = (field, value) => {
    setEditedBookDetails({
      ...editedBookDetails,
      [field]: value,
    });
  };

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
                {editableBookId === book.id ? (
                  <>
                    <TextField
                      label="Title"
                      fullWidth
                      margin="normal"
                      value={editedBookDetails.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                    />
                    <TextField
                      label="Author"
                      fullWidth
                      margin="normal"
                      value={editedBookDetails.author}
                      onChange={(e) => handleChange('author', e.target.value)}
                    />
                    <TextField
                      label="Price"
                      type="number"
                      fullWidth
                      margin="normal"
                      value={editedBookDetails.price}
                      onChange={(e) => handleChange('price', e.target.value)}
                    />
                    <Button variant="contained" onClick={() => handleSaveClick(book.id)}>
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2">Author: {book.author}</Typography>
                    <Typography variant="body2">Price: ${book.price}</Typography>
                    <Button variant="outlined" onClick={() => handleEditClick(book)}>
                      Edit
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageBooks;
