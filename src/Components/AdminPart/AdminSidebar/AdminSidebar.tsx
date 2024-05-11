import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemButton, ListItemText,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './style.scss';

const AdminSidebar = () => {
  return (
    <nav className="admin-nav">
      <List disablePadding>
        <ListItem>
          <NavLink to="menu-items" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Записи" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="daily-menu" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Дневное меню" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="categories" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Категории" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="settings" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Настройки" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="orders" className="admin-sidebar-link">
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Заказы" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </nav>
  );
};

export default AdminSidebar;
