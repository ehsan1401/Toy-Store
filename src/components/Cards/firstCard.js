import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({ ops , text , imageURL}) {
    {
        imageURL.slice(0,1).map(img=>{
            console.log(img)
        })
    }
    // const image = imageURL.toyImages.slice(0,0).map((img)=>{img});
  return (
    <Card sx={{ maxWidth: 345 ,boxSizing: "border-box" }}>
      <CardMedia
        sx={{ height: 140 , paddingY: 20 }}
        image={    
            imageURL.slice(0,1)
        }
        title={ops}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ops}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"*"}><Button size="small">Share</Button></Link>
        <Link to={"*"}><Button size="small">More</Button></Link>
      </CardActions>
    </Card>
  );
}
