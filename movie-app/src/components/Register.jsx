// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// const Register = ({user}) => {
//   const[form,setForm]=useState({
//     username:user.username,
//     email:user.email,
//     password:user.password,
//     confirmpass:user.confirmpass,
//     address:user.address
//   });//these are the values of the form and we are passing them to the backend
//   const changevalue=(e)=>{
//     setForm({
//       ...form,
//       [e.target.name]:e.target.value
//     })
//   }
//   const submitvalue=(e)=>{
//     console.log(form);
//   }
//   return (
//  <Box
//       component="form"
//       sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//       style={{textAlign:'center'}}
//     >
//         <br />
//         <TextField
//           required
//           label="Username"
//           name='username'
//           value={form.username}
//           onChange={changevalue}
//         />
//         <br />
//         <TextField
//           required
//           label="Email ID"
//           name='email'
//           value={form.email}
//           onChange={changevalue}
//         />
//         <br />
//           <TextField
//           required
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           name='password'
//           value={form.password}
//           onChange={changevalue}
//         />
//         <br />
//         <TextField
//           required
//           label="Confirm Password"
//           type="password"
//           autoComplete="current-password"
//           name='confirmpass'
//           value={form.confirmpass}
//           onChange={changevalue}
//         />
//         <br />
//         <TextField
//           required
//           label="Address"
//           multiline maxRows={4}
//           name='address'
//           value={form.address}
//           onChange={changevalue}

//         />
//         <br /><br />
//         <Button variant="contained" onClick={submitvalue} sx={{backgroundColor:'#da1a32', borderRadius:'10px'}}>Register</Button>
    
//     </Box>
//   )
// }

// export default Register

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Fade,
} from '@mui/material';
import axios from 'axios';

const Register = ({ user }) => {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Password: '',
    Address: '',
    ConfirmPass: '',
 
  });

  const changeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    axios
      .post('http://localhost:3000/adduser',form)
      .then((res) => {
        console.log('user added:', res.data);
        setForm({ Name: '', Email: '', Password: '',ConfirmPass: '', Address: '' });
        
      })
      .catch((err) => {
        console.error('Error adding user:', err);
      });
  };


  return (
    <Fade in timeout={600}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f5f5f5',
          px: 2,
          backgroundColor: 'black',
        }}
      >
        <Card sx={{ p: 3, maxWidth: 500, width: '100%', borderRadius: 4, backgroundColor: '#850321', boxShadow: 5 }}>
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              gutterBottom
              sx={{ color: '#efdfbb' }}
            >
              Create an Account ✨
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mt: 2,
              }}
            >
              <TextField
                required
                label="Username"
                name="Name"
                value={form.Name}
                onChange={changeValue}
                fullWidth
                sx={{ backgroundColor: '#efdfbb', borderRadius: 1 }}
              />
              <TextField
                required
                label="Email ID"
                name="Email"
                value={form.Email}
                onChange={changeValue}
                fullWidth
                sx={{ backgroundColor: '#efdfbb', borderRadius: 1 }}
              />
              <TextField
                required
                label="Password"
                type="password"
                name="Password"
                value={form.Password}
                onChange={changeValue}
                fullWidth
                sx={{ backgroundColor: '#efdfbb', borderRadius: 1 }}
              />
              <TextField
                required
                label="Confirm Password"
                type="password"
                name="ConfirmPass"
                value={form.ConfirmPass}
                onChange={changeValue}
                fullWidth
                sx={{ backgroundColor: '#efdfbb', borderRadius: 1 }}
              />
              <TextField
                required
                label="Address"
                multiline
                maxRows={4}
                name="Address"
                value={form.Address}
                onChange={changeValue}
                fullWidth
                sx={{ backgroundColor: '#efdfbb', borderRadius: 1 }}
              />

              <Button
                variant="contained"
                onClick={submitForm}
                sx={{
                  mt: 2,
                  backgroundColor: '#efdfbb',
                  color: '#850321',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  py: 1.2,
                  '&:hover': {
                    backgroundColor: '#fff0cc',
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
};

export default Register;
