import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Link,
  Box,
} from '@mui/material';

import { Home, AutoAwesomeMosaic, VerifiedUser } from '@mui/icons-material';

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
    icon: <VerifiedUser />,
  },
];

const Navbar = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav">
        <ListItem disablePadding>
          <Link href="/" color="inherit" underline="none">
            <ListItemButton>
              <ListItemIcon>
                <AutoAwesomeMosaic />
              </ListItemIcon>
              <ListItemText>Dashboardsdkjf;slkdfj</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        {links.map((link) => (
          <ListItem
            // sx={{ justifyContent: 'center' }}
            disablePadding
            key={link.href}>
            <Link href={link.href} color="inherit" underline="none">
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{link.text}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
