import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemButton, ListItemText,
} from '@mui/material/';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';

const AdminSidebar = () => {
  return (
    <nav>
      <List disablePadding>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Записи" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Категории" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};

export default AdminSidebar;
