import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import { colors, Container, ListSubheader } from '@mui/material';

const listItem = (
  <>
    <ListItem alignItems="flex-start" sx={{ paddingInline:4, paddingY:2 }}>
      <ListItemAvatar>
        <Avatar alt="Announcement" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Gymkhana CLub"
        primaryTypographyProps={{ style: { color: '#000' } }}
        secondary={
          <React.Fragment >
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <Typography variant="body1" fontWeight={600} color="#4B70F5" style={{ display: 'inline', cursor: 'pointer' }}>
                {" Scheduled maintenance will occur from 2 AM to 4 AM Scheduled maintenance will occur from 2 AM to 4 AM"}
              </Typography>
              {/* time */}
              <Typography variant="caption" color="textSecondary" style={{ display: 'inline' }}>
                2 hours ago
              </Typography>
            </div>
          </React.Fragment>
        }

      />
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItem>
    <Divider variant="middle" component="li" />
  </>)

export default function NotificationList() {
  return (
    <List sx={{ width:'auto', bgcolor: '#F7F9FB', borderRadius: 4, height: '82rem', scrollSnapType:'block', overflowY:'scroll' }}>
      <ListSubheader style={{ backgroundColor: "#F7F9FB", paddingTop: '1rem', marginTop:0, paddingInline: '2rem' }}>
        <Typography variant="h6" fontWeight={600}>Notifications</Typography>
      </ListSubheader>

      {/* render 10 list items */}
      {[...Array(10)].map((_, index) => (
        listItem
      ))}


    </List>
  );
}
