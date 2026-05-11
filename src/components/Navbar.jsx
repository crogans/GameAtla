import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return <Box sx={{ flexGrow: 1, marginBottom: 2}}>
    <AppBar position="static">
      <Toolbar sx={{ padding: '0.5rem 1rem' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '2rem' }}>
            GameAtla
          </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}