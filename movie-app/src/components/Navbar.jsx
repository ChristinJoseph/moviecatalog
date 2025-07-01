// import React from 'react'
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
    
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// const Navbar = () => {
//   return (
//   <Box sx={{ flexGrow: 1 }} >
//       <AppBar position="static" sx={{ backgroundColor: '#850321', borderRadius: '10px'}} >
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:'#efdfbb' }}
//           >
//             Movie Catalog
//           </Typography>
          
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//            <Link to={'/home'}><Button color="inherit" style={{color:"#efdfbb"}} >Home</Button></Link>
//           <Link to={'/review'}><Button color="inherit" style={{color:"#efdfbb"}} >Reviews</Button></Link>
//           <Link to={'/'}><Button color="inherit" style={{color:"#efdfbb"}}>Login</Button></Link>
//           <Link to={'/register'}><Button color="inherit" style={{color:"#efdfbb"}}>Get Started</Button></Link>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   )
// }

// export default Navbar
import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Button,
  alpha,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#efdfbb', 0.15),
  '&:hover': {
    backgroundColor: alpha('#efdfbb', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#efdfbb',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#efdfbb',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#850321',
          // borderRadius: 2,
          px: 2,
          py: 0.5,
          boxShadow: 4,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: 2,
              fontWeight: 'bold',
              color: '#efdfbb',
              fontFamily: '"Cinzel", serif',
            }}
          >
            🎬 Movie Catalog
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>

            <Button component={Link} to="/home" sx={{ color: '#efdfbb' }}>
              Home
            </Button>
            <Button component={Link} to="/review" sx={{ color: '#efdfbb' }}>
              Reviews
            </Button>
            <Button component={Link} to="/register" sx={{ color: '#efdfbb' }}>
              Get Started
            </Button>
                        <Button component={Link} to="/" sx={{ color: '#efdfbb' }}>
              Login
            </Button>
            <Button component={Link} to="/view" sx={{ color: '#efdfbb' }}>View</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
