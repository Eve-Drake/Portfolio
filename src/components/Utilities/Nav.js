import * as React from 'react';
import { theme } from '../../themes/Theme';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import div from '@mui/material/div';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import {BiCodeAlt} from "react-icons/bi"

const pages = [
  {text:'Home', url: "#" , id: 0},
  {text:'Shopping List', url: "ShoppingList", id: 1},
  {text:'Small Projects Page', url: "SmallProjectsPage", id: 2},
  {text:'Reading List', url: "ReadingList", id: 3},
  {text:'Contact Me', url: "ContactMe", id: 4}
];


const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar className="nav" position="static" sx={{
      backgroundColour: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }}>
      <div maxWidth="xl">
        <Toolbar>
        <BiCodeAlt size={50} sx={{  display: { xs: 'none', md: 'flex' }, mr: 1, }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 200,
              color: 'inherit',
              textDecoration: 'none',
              pl: '15px'
            }}
          >
           
          </Typography>

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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu} >
                  <Typography>
                    <Link to={`/${page.url}`}>
                      {page.text}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Eve Drake
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',}} >
                  <Link to={`/${page.url}`}>
                      {page.text}
                  </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
};
export default Nav;
