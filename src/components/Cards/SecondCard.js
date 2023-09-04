import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { orange , grey } from '@mui/material/colors';

export default function ActionAreaCard({ ops , text , imageURL , beforePrice ,price ,symbol }) {
    {
        imageURL.slice(0,1).map(img=>{
            console.log(img)
        })
    }
  return (
    <Card sx={{ maxWidth: 300 , Height: 600 ,boxSizing: 'border-box' , background:grey[100] }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={    
            imageURL.slice(0,1)
        }
          sx={{ height: 220}}
          alt={ops}
        />
        <CardContent
            sx={{ height: 160}}
        >
          <Typography gutterBottom variant="h6" component="div" sx={{ height: 28}} >
            {ops}
          </Typography>
          <div className='border-2 border-dashed border-gray-400 h-20 rounded-2xl bg-white'>
            <h1 className='text-3xl px-8 pt-2  text-lime-600 font-semibold'>{price} <span>{symbol}</span></h1>
            {beforePrice && <p className='px-9 py-1 line-through font-thin'>{beforePrice} <span>{symbol}</span></p>}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
