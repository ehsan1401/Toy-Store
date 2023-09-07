import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { orange , grey } from '@mui/material/colors';

export default function MediaCard({ ops , text , imageURL , price ,symbol ,Code}) {
  
  return (
    <Card sx={{ maxWidth: 300 , Height: 700 ,boxSizing: 'border-box' , background:grey[300]  }} >
      <CardMedia
        sx={{ height: 140 , paddingY: 20 }} 
        image={    
          imageURL[0]
        }
        
        title={ops}
      />
      <CardContent
        sx={{ height: 200}}
      >
        <Typography gutterBottom variant="h5" component="div">
          {ops}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='overflow-hidden h-20'>
            {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/toy/" + Code}><Button size="small" variant='outlined' color='success'>info</Button></Link>
        <Link to={"/toy/" + Code}><Button size="small" variant='contained' color='warning'>Buy</Button></Link>
        <h1 className='font-thin text-2xl ml-8 mr-4 text-lime-600'>{price} <span>{symbol}</span></h1>
      </CardActions>
    </Card>
  );
}
