// components/Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography ,Button} from '@mui/material';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      style={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: '#1a1a2e', // Dark background
          color: '#000', // Light text color
        },
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          textAlign: 'center',
          padding: 2,
          fontWeight: 'bold',
          color: '#e94560', // Accent color
        }}
      >
        ERP Dashboard
      </Typography>
      <List>
        {['Dashboard', 'Inventory', 'Sales', 'Purchases', 'Reports', 'Settings'].map((text) => (
          <Link href={`/${text.toLowerCase()}`} key={text} passHref>
            <ListItem button sx={{ padding: 2 }}>
              <ListItemText primary={text} sx={{ color: '#000' }} />
            </ListItem>
          </Link>
        ))}
      </List>
      {/* Log Out Button */}
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        sx={{
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 'normal',
          width: 'calc(100% - 32px)',
          justifyContent: 'flex-start',
          margin: '10px 16px',
          borderColor: '#e94560',
          color: '#e94560',
          '&:hover': {
            borderColor: '#000',
            color: '#000',
          },
        }}
      >
        Log Out
      </Button>
    </Drawer>
  );
};

export default Sidebar;
