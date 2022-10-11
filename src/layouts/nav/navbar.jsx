import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jake's Portfolio
          </Typography>

          <Button color="inherit">
            <Link to="/"><Typography color="white">About</Typography></Link>
            </Button>

          <Button color="inherit">
            <Link to="/portfolio"><Typography color="white">Portfolio</Typography></Link>
            </Button>

          <Button color="inherit">
            <Link to="/resume"><Typography color="white">Resume</Typography></Link>
            </Button>
            
          <Button color="inherit">
            <Link to="/contact"><Typography color="white">Contact</Typography></Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}