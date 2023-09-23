import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CardComponent = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" component="div">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
