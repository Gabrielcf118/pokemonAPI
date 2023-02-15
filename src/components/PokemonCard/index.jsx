import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function PokemonCard({name, image, types }) {
  const typeHandle = () => {
    if(types[1]) {
      return types[0].type.name + " " + types[1].type.name
    }
    return types[0].type.name
  }
  console.log(image)
  console.log(name, image, types)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {typeHandle()}
        </Typography>
     
      </CardContent>
   
    </Card>
  );
}
