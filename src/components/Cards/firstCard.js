import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { orange , grey } from '@mui/material/colors';

export default function MediaCard({ ops , text , imageURL}) {
    {
        imageURL.slice(0,1).map(img=>{
        })
    }
    // const image = imageURL.toyImages.slice(0,0).map((img)=>{img});
  return (
    <Card sx={{ maxWidth: 300 , Height: 600 ,boxSizing: 'border-box' , background:grey[300] }} >
      <CardMedia
        sx={{ height: 140 , paddingY: 20 }}
        image={    
            imageURL.slice(0,1)
        }
        title={ops}
      />
      <CardContent
        sx={{ height: 140}}
      >
        <Typography gutterBottom variant="h5" component="div">
          {ops}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='overflow-hidden h-20'>
            {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"*"}><Button size="small" variant='outlined' color='success'>Share</Button></Link>
        <Link to={"*"}><Button size="small" variant='contained' color='warning'>More</Button></Link>
      </CardActions>
    </Card>
  );
}
