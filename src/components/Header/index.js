
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ role }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Library Management System
        </Typography>
        <Button color="inherit" component={Link} to="/books">
          Books
        </Button>
        <Button color="inherit" component={Link} to="/purchased-books">
          Purchased Books
        </Button>
        {role === 'author' && (
          <>
            <Button color="inherit" component={Link} to="/author/manage-books">
              Manage Books
            </Button>
            <Button color="inherit" component={Link} to="/author/upload-book">
              Upload Book
            </Button>
          </>
        )}
        {role === 'librarian' && (
          <>
            <Button color="inherit" component={Link} to="/librarian/manage-users">
              Manage Users
            </Button>
            <Button color="inherit" component={Link} to="/librarian/bulk-upload">
              Bulk Upload
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
