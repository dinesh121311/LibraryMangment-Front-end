import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import './index.css';

const ManageUsers = ({ users }) => {
  return (
    <div className="manage-users-container">
      <Typography variant="h4" className="page-title">Manage Users</Typography>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card className="user-card">
              <CardContent className="user-card-content">
                <Typography variant="h6" className="user-name">{user.name}</Typography>
                <Typography variant="body2" className="user-role">Role: {user.role}</Typography>
                <Typography variant="body2" className="user-email">Email: {user.email}</Typography>
                <Box className="button-container">
                  <Button variant="contained" className="edit-button">
                    Edit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageUsers;
