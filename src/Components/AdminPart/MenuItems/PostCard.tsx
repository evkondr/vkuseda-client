import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Box, IconButton,
} from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TMenuItem } from '../../../types';
import './index.scss';

type PostCardProps ={
    menuItem: TMenuItem
};

const PostCard = ({ menuItem }:PostCardProps) => {
  const {
    name, ingredients, image, imageAlt,
  } = menuItem;
  return (
    <Card className="post-card">
      {/* Card image */}
      <Box className="post-card__image">
        <CardMedia component="img" image={image} alt={imageAlt} />
      </Box>
      {/* Card content */}
      <CardContent className="post-card__content">
        <Typography variant="h5">
          {name}
        </Typography>
        <Box>
          {/* Card description */}
          <Typography variant="body2">
            Описание:
          </Typography>
        </Box>
        <Typography variant="body1">
          {ingredients}
        </Typography>
        <Box className="post-card__buttons">
          {/* Card control */}
          <IconButton aria-label="Edit">
            <EditNoteIcon />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;