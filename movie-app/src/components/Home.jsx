// // import React from 'react';
// // import { Box, Typography, Button } from '@mui/material';
// // import { Link } from 'react-router-dom';

// // const Home = () => {
// //   return (
// //     <Box
// //       sx={{
// //         backgroundColor: 'black',
// //         minHeight: '100vh',
// //         color: '#fff',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         padding: 4,
// //         textAlign: 'center',
// //         borderRadius: '10px',
// //       }}
// //     >
// //       <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#efdfbb' }}>
// //         🎥 Movie Catalog
// //       </Typography>
// //       <Typography variant="h6" sx={{ maxWidth: '600px', mb: 4 }}>
// //         Discover movies, read reviews, and keep track of what you've watched. Built with love & React ❤️
// //       </Typography>

// //       <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
// //         <Link to="/review" style={{ textDecoration: 'none' }}>
// //           <Button variant="contained" sx={{ backgroundColor: '#850321', borderRadius: '20px' }}>
// //             Browse Reviews
// //           </Button>
// //         </Link>
// //         <Link to="/register" style={{ textDecoration: 'none' }}>
// //           <Button variant="outlined" sx={{ color: '#efdfbb', borderColor: '#efdfbb', borderRadius: '20px' }}>
// //             Get Started
// //           </Button>
// //         </Link>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Home;

// import React from 'react';
// import { Box, Typography, Button, Fade } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <Fade in timeout={800}>
//       <Box
//         sx={{
//           background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
//           minHeight: '100vh',
//           color: '#fff',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           px: 4,
//           textAlign: 'center',
//         }}
//       >
//         <Typography
//           variant="h2"
//           gutterBottom
//           sx={{
//             fontWeight: 'bold',
//             color: '#efdfbb',
//             fontFamily: '"Cinzel", serif', // Epic vibe
//           }}
//         >
//           🎥 Movie Catalog
//         </Typography>

//         <Typography
//           variant="h6"
//           sx={{
//             maxWidth: '600px',
//             mb: 5,
//             color: '#ddd',
//             fontStyle: 'italic',
//           }}
//         >
//           Discover films, read reviews, and track your favorites. Made with React, popcorn, and late-night coding. 🍿✨
//         </Typography>

//         <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
//           <Link to="/review" style={{ textDecoration: 'none' }}>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: '#850321',
//                 borderRadius: '30px',
//                 px: 4,
//                 py: 1.5,
//                 '&:hover': {
//                   backgroundColor: '#a1062e',
//                 },
//               }}
//             >
//               Browse Reviews
//             </Button>
//           </Link>

//           <Link to="/register" style={{ textDecoration: 'none' }}>
//             <Button
//               variant="outlined"
//               sx={{
//                 color: '#efdfbb',
//                 borderColor: '#efdfbb',
//                 borderRadius: '30px',
//                 px: 4,
//                 py: 1.5,
//                 '&:hover': {
//                   backgroundColor: '#efdfbb22',
//                   borderColor: '#efdfbb',
//                 },
//               }}
//             >
//               Get Started
//             </Button>
//           </Link>
//         </Box>
//       </Box>
//     </Fade>
//   );
// };

// export default Home;

import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';



const mockMovies = [
  {
    title: 'Inception',
    poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
    description: 'A mind-bending thriller by Christopher Nolan.',
  },
  {
    title: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
    description: 'A journey beyond the stars to save humanity.',
  },
  {
    title: 'The Dark Knight',
    poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA',
    description: 'The iconic Batman saga with legendary Joker vibes.',
  },
];

const Home = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: '#fff', minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#efdfbb' }}>
          🎥 Movie Catalog
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '600px', mb: 4 }}>
          Discover movies, read reviews, and keep track of what you've watched. Built with love & React ❤️
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/review" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ backgroundColor: '#850321', borderRadius: '20px' }}>
              Browse Reviews
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: '#efdfbb', borderColor: '#efdfbb', borderRadius: '20px' }}>
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Featured Movies Section */}
      <Box sx={{ px: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: '#efdfbb', fontWeight: 'bold' }}>
          🌟 Trending Movies
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {mockMovies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#efdfbb' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={movie.poster}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="#bbb">
                    {movie.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
    