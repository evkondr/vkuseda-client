import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Box, IconButton,
} from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TMenuItem } from '../../../types';
import './index.scss';

type PostCardProps ={
    menuItem: TMenuItem,
    deleteHandler: () => void,
};

const MenuItemCard = ({ menuItem, deleteHandler }:PostCardProps) => {
  const {
    name, ingredients, image, imageAlt, category,
  } = menuItem;
  return (
    <Card className="post-card">
      {/* Card image */}
      <Box className="post-card__image">
        <CardMedia component="img" image={`${process.env.REACT_APP_IMAGE_URL}/${image}`} alt={imageAlt} />
      </Box>
      {/* Card content */}
      <CardContent className="post-card__content">
        <Typography variant="h5">
          {name}
        </Typography>
        <Box>
          {/* Card category */}
          <Typography variant="body2">
            Категория:
            {' '}
            {category?.name}
          </Typography>
        </Box>
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
          <button type="button" style={{ background: 'none', border: 'none', padding: 0 }}>
            <IconButton aria-label="Edit">
              <EditNoteIcon />
            </IconButton>
          </button>
          <button type="button" onClick={deleteHandler} style={{ background: 'none', border: 'none', padding: 0 }}>
            <IconButton aria-label="Delete">
              <DeleteOutlineIcon />
            </IconButton>
          </button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
