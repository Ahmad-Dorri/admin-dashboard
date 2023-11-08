import { Grid, Box } from '@mui/material';

import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Box component="main">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Navbar />
        </Grid>
        <Grid bgcolor={'blue'} item xs={9}></Grid>
      </Grid>
    </Box>
  );
}

export default App;
