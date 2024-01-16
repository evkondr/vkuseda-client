import React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { TMenuItem } from '../../../types';

type PostCardProps ={
    menuItem: TMenuItem
};

const PostCard = ({ menuItem }:PostCardProps) => {
  const {
    name, ingredients, image, imageAlt,
  } = menuItem;
  return (
    <Card>
      <CardContent sx={{ display: 'flex' }}>
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography>
          {ingredients}
        </Typography>
      </CardContent>
      <CardMedia width="150px" component="img" image={image} alt={imageAlt} />
    </Card>
  );
};

export default PostCard;
