import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style/Footer.css';
import { toast } from 'react-toastify';
import pic from '../style/wf.jpeg'
import fruits from '../style/fruits.webp'
import gaming from '../style/gaming.jpeg'
import loan from '../style/loan.webp'
import seminar from '../style/seminar.jpeg'
import car from '../style/seminar.jpeg'


const handleClick = () => {
  toast.success("Successfully Registered, You will receive a mail with all the details");

};

export default function Events() {
  return (
    <div className='float-container'>

      <div className='float-child'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={pic}
        alt="financial wellbeing"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Join us for a wonderful seminar on financial wellbeing on the 11th of November conducted by the asset manager of 
        Wells Fargo Bank, Mr. Suresh
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Register</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

 <div className='float-child'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={loan}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A home loan fair will be held on the 10th of this month. Get attractive interest rates on home loans! What's more, if
         you are eligible for a pre-approved offer
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Register</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>


    <div className='float-child'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={gaming}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Gaming, Lodging, Leisure & Restaurant One on One Conference, be taking place IN-PERSON Thursday, November 17 - Friday 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Register</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>


    <div className='float-child'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={car}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        7th Annual Lithium l Battery Supply Chain Conference, We are pleased to announce that Wells Fargo Bank’s 7th 
        Annual Lithium l Battery Supply Chain Conference is scheduled 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Register</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div className='float-child'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={fruits}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Gaming, Lodging, Leisure & Restaurant One on One Conference, be taking place IN-PERSON Thursday, November 17 - Friday 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Register</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div className='float-child'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={seminar}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Join us for a wonderful seminar on financial wellbeing on the 11th of November conducted by the asset manager of 
        Wells Fargo Bank, Mr. Suresh
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Register</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    </div>
    
  );
}
