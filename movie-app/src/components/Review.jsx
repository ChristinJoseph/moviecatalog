// import React, { useState } from 'react';
// import { Box, Typography, Rating, TextField,MenuItem  } from '@mui/material';

// export default function MovieForm() {
//   const [value, setValue] = useState(2);
//    const [genre, setGenre] = useState('');
//   const genres = [
//   { value: 'action', label: 'Action' },
//   { value: 'comedy', label: 'Comedy' },
//   { value: 'drama', label: 'Drama' },
//   { value: 'thriller', label: 'Thriller' },
//   { value: 'sci-fi', label: 'Sci-Fi' },
// ];  

//   return (
//     <Box
//       component="form"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         width: '300px',
//         m: 2,
        
//       }}
//       noValidate
//       autoComplete="off"

      
//     > 
  
//       <TextField id="movie-name" label="Movie Name" variant="standard" />

//       <TextField
//       id="genre"
//       select
//       label="Genre"
//       value={genre}
//       onChange={(e) => setGenre(e.target.value)}
//       variant="standard"
//       fullWidth
//     >
//       {genres.map((option) => (
//         <MenuItem key={option.value} value={option.value}>
//           {option.label}
//         </MenuItem>
//       ))} 
//       </TextField>
      
//       <TextField id="outlined-basic" label="Review" variant="outlined" multiline maxRows={4} />
//       <Typography component="legend">Rate the Movie</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Rating,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Button,
  Fade,
} from '@mui/material';

export default function MovieForm() {
  const [form, setForm] = useState({
    Movie: '',
    Genre: '',
    ImageUrl: '',
    Review: '',
  });

  const [value, setValue] = useState(3);

  const genres = [
    { value: 'action', label: 'Action' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'sci-fi', label: 'Sci-Fi' },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };// this is the function is used to change the value of the form

  const submitForm = () => {
    axios
      .post('http://localhost:3000/addfilm', { ...form, Rating: value })
      .then((res) => {
        console.log('Movie added:', res.data);
        setForm({ Movie: '', Genre: '', ImageUrl: '', Review: '' });
        setValue(3); // Reset rating
      })
      .catch((err) => {
        console.error('Error adding movie:', err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };// this is the function is used to submit the form and send the data to the backend


  return (
    <Fade in timeout={600}>
      <Box
        sx={{
          height: '100vh',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: '100%',
            borderRadius: 4,
            backgroundColor: '#850321',
            color: '#efdfbb',
            boxShadow: 6,
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
              Leave a Review 
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                mt: 2,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Movie"
                variant="standard"
                fullWidth
                name="Movie"
                value={form.Movie}
                onChange={handleChange}
                InputProps={{ style: { color: '#efdfbb' } }}
                InputLabelProps={{ style: { color: '#efdfbb' } }}
              />

              <TextField
                select
                label="Genre"
                variant="standard"
                fullWidth
                name="Genre"
                value={form.Genre}
                onChange={handleChange}
                InputProps={{ style: { color: '#efdfbb' } }}
                InputLabelProps={{ style: { color: '#efdfbb' } }}
              >
                {genres.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Review"
                name="Review"
                variant="outlined"
                multiline
                maxRows={4}
                fullWidth
                value={form.Review}
                onChange={handleChange}
                sx={{ backgroundColor: '#efdfbb', borderRadius: 1 }}
              />

              <TextField
                label="ImageUrl"
                name="ImageUrl"
                variant="standard"
                fullWidth
                value={form.ImageUrl}
                onChange={handleChange}
                InputProps={{ style: { color: '#efdfbb' } }}
                InputLabelProps={{ style: { color: '#efdfbb' } }}
              />

              <Box>
                <Typography gutterBottom>Rate the Movie</Typography>
                <Rating
                  name="movie-rating"
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#efdfbb',
                  color: '#850321',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  py: 1.2,
                  '&:hover': {
                    backgroundColor: '#fff1c4',
                  },
                }}
              >
                Submit Review
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}
 