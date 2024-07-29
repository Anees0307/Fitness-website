import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, AppBar, Typography, Box, Toolbar, Avatar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import MemberControl from './MemberControl';
import TrainerControl from './TrainerControl';
import ProgressChart from './ProgressChart';
import './AdminDashboard.css';

const drawerWidth = 240;

function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleLogout = () => {
    // Add any logout logic here if necessary (e.g., clearing auth tokens)
    navigate('/login'); // Navigate to the login page
  };

  return (
    <Box sx={{ display: 'flex' }} className="admin-dashboard">
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexDirection: 'row', alignItems: 'center', padding: '0 16px', backgroundColor: 'var(--primary-color)' }}>
        <Typography variant="h5" noWrap component="div" sx={{ color: '#fff' }}>
          Admin Dashboard
        </Typography>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2e2e2e', // Dark background for the drawer
          },
        }}
        >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button onClick={() => handleTabChange(0)} sx={{ backgroundColor: selectedTab === 0 ? '#4caf50' : 'inherit' }}>
            <ListItemIcon>
              <HomeIcon color={selectedTab === 0 ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleTabChange(1)} sx={{ backgroundColor: selectedTab === 1 ? '#4caf50' : 'inherit' }}>
            <ListItemIcon>
              <PeopleIcon color={selectedTab === 1 ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="Member Control" />
          </ListItem>
          <ListItem button onClick={() => handleTabChange(2)} sx={{ backgroundColor: selectedTab === 2 ? '#4caf50' : 'inherit' }}>
            <ListItemIcon>
              <FitnessCenterIcon color={selectedTab === 2 ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="Trainer Control" />
          </ListItem>
          {/* <ListItem button onClick={() => handleTabChange(3)} sx={{ backgroundColor: selectedTab === 3 ? '#4caf50' : 'inherit' }}>
            <ListItemIcon>
              <AccountBoxIcon color={selectedTab === 3 ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem> */}
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        className="dashboard-content"
        >
        <Toolbar />
        {selectedTab === 0 && (
          <>
            <Typography variant="h4" gutterBottom>Home</Typography>
            <Home />
          </>
        )}
        {selectedTab === 1 && (
          <>
            <Typography variant="h4" gutterBottom>Member Control Panel</Typography>
            <MemberControl />
          </>
        )}
        {selectedTab === 2 && (
          <>
            <Typography variant="h4" gutterBottom>Trainer Control Panel</Typography>
            <TrainerControl />
          </>
        )}
        {selectedTab === 3 && (
          <>
            <Typography variant="h4" gutterBottom>My Profile</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Avatar sx={{ width: 80, height: 80, mr: 3 }}>T</Avatar>
              <Box>
                <Typography variant="h6">Name: Toji</Typography>
                <Typography variant="body1">Email: admin@example.com</Typography>
                <Typography variant="body1">Role: Admin</Typography>
                <Typography variant="body1">Last Login: July 28, 2024</Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default AdminDashboard;
