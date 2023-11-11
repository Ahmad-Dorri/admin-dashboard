import { useState } from 'react';
import Search from './Search';
import SearchIconWrapper from './search-icon-wrapper';
import StyledInputBase from './styled-input-base';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchInput;
