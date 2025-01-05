import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, TextField, Box, Select, MenuItem } from '@mui/material';
import './index.css';

const ManageUsers = ({ users }) => {
  const [editableUserId, setEditableUserId] = useState(null);
  const [editedUserDetails, setEditedUserDetails] = useState({});

  const handleEditClick = (user) => {
    setEditableUserId(user.id);
    setEditedUserDetails({ ...user });
  };

  const handleSaveClick = () => {
    setEditableUserId(null);
    // Logic to save the edited details, e.g., sending it to the backend
    console.log('Saved user details:', editedUserDetails);
  };

  const handleChange = (field, value) => {
    setEditedUserDetails({
      ...editedUserDetails,
      [field]: value,
    });
  };

  return (
    <div className="manage-users-container">
      <Typography variant="h4" className="page-title">Manage Users</Typography>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card className="user-card">
              <CardContent className="user-card-content">
                {editableUserId === user.id ? (
                  <>
                    <TextField
                      label="Name"
                      fullWidth
                      margin="normal"
                      value={editedUserDetails.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                    <Select
                      label="Role"
                      fullWidth
                      margin="normal"
                      value={editedUserDetails.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                    >
                      <MenuItem value="Student">Student</MenuItem>
                      <MenuItem value="Author">Author</MenuItem>
                      <MenuItem value="Librarian">Librarian</MenuItem>
                    </Select>
                    <TextField
                      label="Email"
                      fullWidth
                      margin="normal"
                      value={editedUserDetails.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                    <Box className="button-container">
                      <Button variant="contained" className="save-button" onClick={handleSaveClick}>
                        Save
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <Typography variant="h6" className="user-name">{user.name}</Typography>
                    <Typography variant="body2" className="user-role">Role: {user.role}</Typography>
                    <Typography variant="body2" className="user-email">Email: {user.email}</Typography>
                    <Box className="button-container">
                      <Button variant="contained" className="edit-button" onClick={() => handleEditClick(user)}>
                        Edit
                      </Button>
                    </Box>
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

export default ManageUsers;
