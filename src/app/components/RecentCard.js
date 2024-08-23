// // a recently visited card component using MUI

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';




// const RecentCard = ({ title, bgColor, icon }) => {
//     return (
//         <Card sx={{
//             maxWidth: 345, boxShadow: 0, borderRadius: 4,
//             backgroundColor: bgColor, height: 240
//         }}>

// CardMedia component={"image"}>
// {icon}

// </CardMedia>
//             <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column' }}>

//                 <Typography gutterBottom variant="h5" component="div">
//                     {title}
//                 </Typography>
//             </CardContent>
//         </Card>
//     );
// }

// export default RecentCard;

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const RecentCard = ({ title, icon, bgColor, borderColor }) => {
  return (
    <Card 
    variant='contained'
      sx={{ 
        backgroundColor: bgColor, 
        color: 'white', 
        height: 150, 
        borderRadius: 4, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBlockWidth: 2,
        // borderBlockStyle: 'solid',
        borderBlockColor: borderColor,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: borderColor,
        
        // boxShadow: 3,
      }}
    >
      <CardContent 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Box sx={{ fontSize: 40, mb: 1 }}>
          {icon}
        </Box>
        <Typography variant="h6" color={'#3C3D37'} fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecentCard;
