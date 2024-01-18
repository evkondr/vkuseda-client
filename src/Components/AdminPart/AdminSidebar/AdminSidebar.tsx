import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemButton, ListItemText,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import './style.scss';

const AdminSidebar = () => {
  return (
    <nav>
      <List disablePadding>
        <ListItem>
          <ListItemButton>
            <Link to="posts" className="admin-sidebar-link">
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Записи" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="categories" className="admin-sidebar-link">
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Категории" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="settings" className="admin-sidebar-link">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Настройки" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};

export default AdminSidebar;
