import React, { useState } from 'react';
import {
  Box, Chip, Stack, Divider, Button, Menu, MenuItem, ChipOwnProps,
} from '@mui/material';
import { TCategory } from '../../types';
import './style.scss';

type TMenuFilterProps = {
  categories: TCategory[],
  // eslint-disable-next-line no-unused-vars
  handleFilterButton: (name:string) => void
}
const MenuFilter = ({ categories, handleFilterButton }:TMenuFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      {/* Filter for large screen */}
      <Stack className="filter-lg" spacing={1}>
        <p>Фильтр:</p>
        {categories.map((category:TCategory, index:number) => {
          let variant:ChipOwnProps['variant'] = 'outlined';
          if (activeFilter === index) {
            variant = 'filled';
          }
          return (
            <Chip
              style={{ marginBottom: '5px' }}
              label={category.name}
              variant={variant}
              color="success"
              key={category.id}
              onClick={() => {
                handleFilterButton(category.name);
                setActiveFilter(index);
              }}
            />
          );
        })}
      </Stack>
      {/* Filter for mobile */}
      <Box className="filter-mobile">
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="contained"
          color="success"
        >
          Фильтр
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {categories.map((category:TCategory) => (
            <MenuItem
              key={category.id}
              onClick={() => {
                handleFilterButton(category.name);
                setAnchorEl(null);
              }}
            >
              {category.name}

            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Divider />
    </Box>
  );
};

export default MenuFilter;
