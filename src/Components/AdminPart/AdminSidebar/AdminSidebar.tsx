import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemButton, ListItemText,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './style.scss';

const AdminSidebar = () => {
  return (
    <nav>
      <List disablePadding>
        <ListItem>
          <Link to="menu-items" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Записи" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="daily-menu" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Дневное меню" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="categories" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Категории" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="settings" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Настройки" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="orders" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Заказы" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};

export default AdminSidebar;
