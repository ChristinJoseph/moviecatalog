// import React from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Typography,
// } from '@mui/material';

// const Login = () => {
//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: '#f5f5f5',
//       }}
//     >
//       <Card sx={{ minWidth: 320, p: 3, borderRadius: 3, boxShadow: 5,backgroundColor:'#850321' }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom align="center" fontWeight="bold" sx={{color:'#efdfbb'}}>
//             Welcome  👋
//           </Typography>
//           <Box
//             component="form"
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2,
//               mt: 2,
              
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField label="Email" variant="outlined" fullWidth sx={{backgroundColor:'#efdfbb',borderRadius:1,}} />
//             <TextField label="Password" variant="outlined" type="password" fullWidth sx={{backgroundColor:'#efdfbb',borderRadius:1}}/>
//             <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor:'#efdfbb',color:'#850321'}}>
//               LOGIN
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Login;

import React from 'react';
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Fade,
} from '@mui/material';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <Fade in timeout={600}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          px: 2,
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 380,
            p: 3,
            borderRadius: 4,
            boxShadow: 6,
            backgroundColor: '#850321',
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              sx={{ color: '#efdfbb', mb: 2 }}
            >
              Welcome 👋
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#efdfbb',
                  borderRadius: 1,
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#efdfbb',
                  borderRadius: 1,
                }}
              />
              <Button
                component={Link}
                to="/home"
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  py: 1.2,
                  fontWeight: 'bold',
                  backgroundColor: '#efdfbb',
                  color: '#850321',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fff0cc',
                  },
                }}
              >
                LOGIN
              </Button>
              
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
};

export default Login;
