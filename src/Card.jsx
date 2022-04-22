import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="540"
        image="https://assets-prd.ignimgs.com/2022/02/14/doctor-strange-in-the-multiverse-of-madness-button-1644855515935.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Doctor Strange Madness of Multiverse
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Coming to Threatre soon !!
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="success">
  Book ticket
</Button>
      </CardActions>
    </Card>
  );
}
