import { AutoAwesomeMosaic } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Stack,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { topLinks, bottomLinks } from '../../assets/links';

const Navbar = () => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        height: '100vh',
        background: '#a5f3fc',
      }}
      component="nav"
      subheader={
        <Stack direction="row" padding={1} alignItems="center" gap={2}>
          <AutoAwesomeMosaic />
          <p className="font-bold text-xl">Dashboard</p>
        </Stack>
      }>
      {topLinks.map((link) => (
        <ListItem sx={{ width: 1 }} disablePadding key={link.href}>
          <Link className="w-full overflow-hidden" to={link.href}>
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText>{link.text}</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
      <br />
      <br />
      <br />
      {bottomLinks.map((link) => (
        <ListItem sx={{ width: 1 }} disablePadding key={link.href}>
          <Link className="w-full overflow-hidden" to={link.href}>
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
