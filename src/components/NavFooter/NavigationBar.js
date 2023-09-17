import Context from "../../Context";
import { useContext , useEffect } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Search from '../NavFooter/SearchBar';
import { useState } from 'react';
import Switch from '@mui/material/Switch';


const pages = ['Home' , 'Store' , 'Games'];
const settings = ['Dashboard','Logout'];
const NotLogin = ['Login' , 'Register' ];


function ResponsiveAppBar() {
  const {light} = useContext(Context);
  const {handleLight} = useContext(Context);
  const {login} = useContext(Context);

  let ops = JSON.parse(localStorage.getItem("user"));

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav>
        <p id='backtop'></p>
        <AppBar position="static">
        <Container maxWidth="xl" className='bg-gray-800'>
          <Toolbar disableGutters>
            <img src="/img/icon.webp" className='w-12 mr-5 my-3 hidden md:flex' />
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }} className="pr-3">
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
              <Search />
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
                  <Link to={"/" + page}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={"/" + page}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block'}}
                  >
                    {page}
                  </Button>
                </Link>
                
              ))}
              <Search/>
            </Box>
              <div className='m-auto flex flex-1 md:hidden justify-center'>
                  <img src="/img/icon.webp" className='w-12 mr-5 my-3' />
                  <Typography className='flex justify-center items-center' variant='h6'>
                      Toy Store
                  </Typography>
              </div>
              <div className="flex">
                <span className="pt-1 pr-2 font-mono">{light && <p>Light</p>}{!light && <p>Dark</p>}</span>
                <span><Switch color="warning" checked={!light} onClick={handleLight} /></span>
              </div>
              {ops && <Box sx={{ flexGrow: 0 }} className="pl-3">
              <Tooltip title="Account">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={ops.UserImageAddress} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                
              >
                {settings.map((setting) => (
                  <Link to={"/" + setting}>
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting} </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              </Box>}

              {!ops && <Box sx={{ flexGrow: 0 }} className="pl-3">
              <Tooltip title="Register">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                
              >
                {NotLogin.map((setting) => (
                  <Link to={"/" + setting}>
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting} </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              </Box>}

          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
export default ResponsiveAppBar;
