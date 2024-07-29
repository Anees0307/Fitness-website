import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import './MyProfile.css'; // Import the CSS file

function MyProfile() {
  return (
    <Box className="profile-container">
      <Typography variant="h4" gutterBottom className="profile-title">My Profile</Typography>
      <Box className="profile-info">
        <Avatar className="profile-avatar">T</Avatar>
        <Box className="profile-details">
          <Typography variant="h6">Name: Toji</Typography>
          <Typography variant="body1">Email: admin@example.com</Typography>
          <Typography variant="body1">Role: Admin</Typography>
          <Typography variant="body1">Last Login: July 28, 2024</Typography>
        </Box>
      </Box>
      <Button variant="contained" className="edit-button">Edit Profile</Button>
    </Box>
  );
}

export default MyProfile;
