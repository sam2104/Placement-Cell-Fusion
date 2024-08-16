// components/Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';

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
    </Drawer>
  );
};

export default Sidebar;
