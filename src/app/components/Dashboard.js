"use client";
import React from "react";
import { Box, Grid, Paper, Typography, Button, Avatar, Icon } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import NotificationList from './NotificationsList'
import RecentCard from './RecentCard';
import Chip from "@mui/material";
import SelectRole from "./SelectRole";

// const iconStyles = {
//   color: '#D2C6F9',
// };

const recentCards = [
  {
    title: "Mess Menu",
    color: "#F5DAD2",
    borderColor: "#E3B6A1", // Slightly darker shade for border
    icon: <FastfoodIcon style={{ color: '#E3B6A1' }} fontSize="6" />,
  },
  {
    title: "Academic Calendar",
    color: "#E6E6FA",
    borderColor: "#BFC0E5", // Slightly darker shade for border
    icon: <CalendarTodayIcon style={{ color: '#BFC0E5' }} fontSize="6" />,
  },
  {
    title: "Academic Leave Form",
    color: "#CAF4FF",
    borderColor: "#A3D7F3", // Slightly darker shade for border
    icon: <EventAvailableIcon style={{ color: '#A3D7F3' }} fontSize="6" />,
  },
  {
    title: "2024 Placement Statistics",
    color: "#F6F193",
    borderColor: "#D8B76D", // Slightly darker shade for border
    icon: <TrendingUpIcon style={{ color: '#D8B76D' }} fontSize="6" />,
  },
  {
    title: "My Scholarships",
    color: "#D8EFD3",
    borderColor: "#B0D2A9", // Slightly darker shade for border
    icon: <MonetizationOnIcon style={{ color: '#B0D2A9' }} fontSize="6" />,
  },
  {
    title: "Academic Fees",
    color: "#F1EAFF",
    borderColor: "#D2C6F9", // Slightly darker shade for border
    icon: <AttachMoneyIcon style={{ color: '#D2C6F9' }} fontSize="6" />,
  }

];

const Dashboard = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* User Profile Section */}

      <Paper sx={{ p: 3, mb: 3, backgroundColor: '#0072E8', color: 'white', borderRadius: 4 , boxShadow:'none'}}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={2} textAlign="center" display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Avatar sx={{ width: 96, height: 96, bgcolor: 'white', color: '#0072E8' }} />
            <Box mt={1}> {/* Add some margin between Avatar and SelectRole */}
              <SelectRole />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} paddingLeft={2} paddingTop={1}>
            <Typography variant="h4" fontWeight={700} mb={2}>Neyati</Typography>
            <Typography>Roll No.: 22BCS169</Typography>
            <Typography>B.Tech 2022 | Semester 4</Typography>
            <Typography>Computer Science and Engineering</Typography>
          </Grid>
          <Grid item xs={12} md={2} textAlign="right">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#0072E8',
                borderRadius: 16,
                textTransform: 'none',
                padding: '6px 12px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  boxShadow: 'none',
                }
              }}
            >
              View Professional Profile
              <OpenInNewIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />
            </Button>
          </Grid>
        </Grid>
      </Paper>


      {/* Recent Items */}
      <Box
        marginY={8}
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '1.5rem',
          // margin
        }}>
        <Typography variant="h5" fontWeight={600} color={'#000'}>Recent</Typography>

        <Grid container spacing={4}>
          {recentCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <RecentCard title={card.title} bgColor={card.color} icon={card.icon} borderColor={card.borderColor} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Notifications and Announcements */}
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6}>
          <NotificationList />
        </Grid>
        <Grid item xs={12} md={6}>
          <NotificationList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
