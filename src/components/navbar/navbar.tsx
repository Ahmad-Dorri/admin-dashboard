import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import { Home, AutoAwesomeMosaic, Person } from '@mui/icons-material';

import { Link } from 'react-router-dom';

interface LinkType {
  text: string;
  href: string;
  icon: React.ReactElement;
}

const links: LinkType[] = [
  {
    text: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    text: 'Profile',
    href: '/profile',
    icon: <Person />,
  },
];

const Navbar = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav">
      <ListItem disablePadding>
        <Link to="/">
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesomeMosaic />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>
      {links.map((link) => (
        <ListItem sx={{ width: 1 }} disablePadding key={link.href}>
          <Link to={link.href}>
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText>{link.text}</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navbar;
