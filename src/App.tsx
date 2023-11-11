import { Grid, Box, Stack } from '@mui/material';

import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box component="main">
      <Grid container>
        <Grid item xs={3}>
          <Navbar />
        </Grid>
        <Grid item xs={9}>
          <Stack direction="column">
            <Header />
            <Outlet />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
