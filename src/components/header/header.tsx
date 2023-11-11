import { Box } from '@mui/material';
import React from 'react';
import SearchInput from '../ui/SearchInput/search-input';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      component="header">
      <SearchInput />
      <div></div>
    </Box>
  );
};

export default Header;
