import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import axios from 'axios';


const View = () => {
  const [rows, setRows] = useState([]);
    useEffect(() => {
    axios
      .get("https://moviecatalog-2q10.onrender.com/viewfilm")
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const DeleteForm = (id) => {
    axios
      .delete(`http://localhost:3000/moviedelete/${id}`)
      .then((res) => {
        console.log('Movie deleted:', res.data);
        setRows(prev => prev.filter(movie => movie._id !== id));

      })
      .catch((err) => {
        console.error('Error deleting movie:', err);
      });
  };
  
  return (
        <Grid container spacing={3} sx={{ padding: 2 }}>
      {rows.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={user.ImageUrl}
              movie={`${user.Movie}`}
              genre={`${user.Genre}`}
              review={`${user.Review}`}
              rating={`${user.Rating}`}

            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {user.imageUrl}
              </Typography>
              <Typography variant="body2" color="text.secondary"sx={{fontfamily:'cursive'}}>
               Film: {user.Movie}
              </Typography> 
              <Typography variant="body2" color="text.secondary">
                 Genre: {user.Genre} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Review: {user.Review}
              </Typography>
              <Rating name="read-only" value={user.Rating} readOnly />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => DeleteForm(user._id)}>Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>

  )
}

export default View
