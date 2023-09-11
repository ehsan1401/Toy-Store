import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { orange , grey } from '@mui/material/colors';
import { useContext } from 'react';
import Context from '../../Context';
export default function ActionAreaCard({ ops , text , imageURL , beforePrice ,price ,symbol , suplly }) {
    {
        imageURL.slice(0,1).map(img=>{
        })
    }
    const {light} = useContext(Context);
  return (
      <div>
        { 
          light && 
            <Card sx={{ maxWidth: 250 , minWidth:220 , Height: 700 ,boxSizing: 'border-box' , background:grey[100] }}>
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
                  sx={{ height: 200}}
              >
                <Typography gutterBottom variant="h6" component="div" className='h-auto' >
                  {ops}
                </Typography>
                <div className='border-2 border-dashed border-gray-400 h-20 rounded-2xl bg-white'>
                  {
                    suplly && 
                      <div>
                          <h1 className='text-3xl text-center px-8 pt-2  text-lime-600 font-semibold'>{price} <span>{symbol}</span></h1>
                          {beforePrice && <p className='px-9 text-center py-1 line-through font-thin'>{beforePrice} <span>{symbol}</span></p>}
                      </div>
                  }
                  {
                    !suplly && 
                    <h1 className='text-2xl text-center pt-5  text-red-500 font-bold'>Nonexistence</h1>
                  }
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        }{
          !light && 
            <Card sx={{ maxWidth: 250 , minWidth:220 , Height: 700 ,boxSizing: 'border-box' , background:grey[700] }}>
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
                  sx={{ height: 200}}
              >
                <Typography gutterBottom variant="h6" component="div" className='h-auto text-gray-200' >
                  {ops}
                </Typography>
                <div className='border-2 border-dashed border-gray-400 h-20 rounded-2xl bg-gray-600'>
                  {
                    suplly && 
                      <div>
                          <h1 className='text-3xl text-center px-8 pt-2  text-lime-400 font-semibold'>{price} <span>{symbol}</span></h1>
                          {beforePrice && <p className='px-9 text-center text-gray-200 py-1 line-through font-thin'>{beforePrice} <span>{symbol}</span></p>}
                      </div>
                  }
                  {
                    !suplly && 
                    <h1 className='text-2xl text-center pt-5 text-red-400 font-bold'>Nonexistence</h1>
                  }
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        }
      </div>
  );
}
