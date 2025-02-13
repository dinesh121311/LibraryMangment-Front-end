import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const UploadBook = () => {
  return (
    <div>
      <Typography variant="h4">Upload New Book</Typography>
      <form>
        <TextField label="Title" fullWidth margin="normal" />
        <TextField label="Author" fullWidth margin="normal" />
        <TextField label="Description" fullWidth margin="normal" />
        <TextField label="Price" type="number" fullWidth margin="normal" />

        <input
          accept="application/pdf"
          type="file"
          style={{ margin: '10px 0', display: 'block' }}
        />

        <Button variant="contained" color="primary" fullWidth>
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
