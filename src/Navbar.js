import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const pages = [
  { id: 'startSection', name: 'Inicio' }, 
  { id: 'aboutUsSection', name: 'Quienes somos' },
  { id: 'productsSection', name: 'Productos'},
  { id: 'servicesSection', name: 'Servicios' },
  { id: 'blogSection', name: 'Blog' }
];
const settings = ['Qyiu', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (scrollToId = null) => {

    if (typeof window !== "undefined" && scrollToId) {
      let sectionToNav = document.getElementById(scrollToId);
      if(sectionToNav){
        sectionToNav.scrollIntoView({
          behavior: 'smooth', // gives an ease-in-out effect to our scroll
        })
      };
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu(null)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={() => handleCloseNavMenu(page.id)} className="activeClass">
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {<img src="/logocolor.png" alt="De la cuenca logo" height="64" width="64"/>}
            <Box sx={{ flexGrow: 1, paddingLeft: 4, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page.id)}
                  sx={{ my: 2, color: '#000000', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
