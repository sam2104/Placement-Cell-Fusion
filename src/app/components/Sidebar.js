// // components/Sidebar.tsx
// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
// import Link from 'next/link';

// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       style={{
//         width: 250,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 250,
//           boxSizing: 'border-box',
//           backgroundColor: '#1a1a2e', // Dark background
//           color: '#000', // Light text color
//         },
//       }}
//     >
//       <Typography
//         variant="h6"
//         noWrap
//         component="div"
//         sx={{
//           textAlign: 'center',
//           padding: 2,
//           fontWeight: 'bold',
//           color: '#e94560', // Accent color
//         }}
//       >
//         ERP Dashboard
//       </Typography>
//       <List>
//         {['Dashboard', 'Inventory', 'Sales', 'Purchases', 'Reports', 'Settings'].map((text) => (
//           <Link href={`/${text.toLowerCase()}`} key={text} passHref>
//             <ListItem button sx={{ padding: 2 }}>
//               <ListItemText primary={text} sx={{ color: '#000' }} />
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
// "use client";
// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close"; // Import Close icon

// const drawerWidth = 240;

// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);

//   const handleDrawerClose = () => {
//     setIsClosing(true);
//     setMobileOpen(false);
//   };

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false);
//   };

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           {mobileOpen && (
//             <IconButton
//               color="inherit"
//               aria-label="close drawer"
//               edge="end"
//               onClick={handleDrawerClose}
//               sx={{ display: { sm: "block" } }}
//             >
//               <CloseIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onTransitionEnd={handleDrawerTransitionEnd}
//           onClose={handleDrawerClose}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

// export default ResponsiveDrawer;

"use client";

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import BookIcon from '@mui/icons-material/Book';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DomainIcon from '@mui/icons-material/Domain';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SportsIcon from '@mui/icons-material/Sports';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';


import { Avatar } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{
        backgroundColor: '#fff',
        boxShadow: 'none',
        borderBottomWidth: 1,
        borderWidth: 1,
        borderBottomColor: '#C6C6C6', color: '#000'
      }}>
        <Box borderBottom={1} borderColor="#C7C8CC">
          <Toolbar style={{
            borderBottomWidth: 1,
            borderBottomColor: '#C6C6C6',

          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" color={'#686D76'} fontWeight={600}>
              Dashboard
            </Typography>

            {/* front and back icon buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                // width: '20%',
                flexDirection: 'row',
                columnGap: 4,
                paddingX: 4
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#C6C6C6',
                  padding: 0

                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#C6C6C6',
                  padding: 0

                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </Box>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List>
          <ListItem>
            <Avatar />
            <ListItemText primary="Neyati" sx={{ marginLeft: 2, fontWeight:600 }} />
          </ListItem>
          <Divider />
          {/*  text only if open */}
          
          {/* <ListItemText primary="Modules" sx={{ margin: 2, fontWeight: 'bold' }} /> */}
          {[
            { text: 'Academics', icon: <BookIcon /> },
            { text: 'Programme and Curriculum', icon: <BookIcon /> },
            { text: 'Mess Management', icon: <RestaurantMenuIcon /> },
            { text: 'Healthcare Center', icon: <LocalHospitalIcon /> },
            { text: 'Complaint System', icon: <ReportProblemIcon /> },
            { text: 'Department Portal', icon: <ApartmentIcon /> },
            { text: 'Hostel Management', icon: <DomainIcon /> },
            { text: 'Visitor\'s Hostel', icon: <EmojiPeopleIcon /> },
            { text: 'Scholarship Portal', icon: <SchoolIcon /> },
            { text: 'Placement Cell', icon: <WorkIcon /> },
            { text: 'Gymkhana', icon: <SportsIcon /> }
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ px: 3 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{marginBottom:0, marginTop:'4rem'}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 3 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>

    </Box>
  );
}
