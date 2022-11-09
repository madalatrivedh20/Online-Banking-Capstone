import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAppContext from '../AppStateContext';

const handleClick = () => {
    alert('Registered!');
};

const EventsCard = ({ title, date, body }) => (
    <Card sx={{ margin: 5, borderRadius: 2 }}>
        <CardContent>
            <Typography sx={{ fontSize: 25, color: 'black' }} gutterBottom>
                {title}
            </Typography>
            <Typography sx={{ fontSize: 15, color: 'grey', mb: 1.5 }} >
                {date}
            </Typography>
            <Typography sx={{ fontSize: 15, color: 'black' }}>
                {body}
            </Typography>

        </CardContent>
        <CardActions>
            <Button size="large" onClick={handleClick}>Register</Button>
        </CardActions>
    </Card>
);



const Events = () => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <h1>Events</h1>
        </div>
        <Box sx={{ minWidth: 275 }}>
            <EventsCard title="Financial wellbeing" date="Friday, 11 November" body="Join us for a wonderful seminar on financial wellbeing on the 11th of November conducted by the asset manager of 
                ICICI Bank, Mr. Suresh" />
        </Box>

        <Box sx={{ minWidth: 275 }}>
            <EventsCard title="Home loan fair" date="Thursday, 10 November" body="A home loan fair will be held on the 10th of this month. Get attractive interest rates on home loans! What's more, if
         you are eligible for a pre-approved offer, you can get instant loan sanction with no documentation. Added benefits include, attractive interest rate, low EMI and simplified loan application and disbursement process.
" />
        </Box>

        <Box sx={{ minWidth: 275 }}>
            <EventsCard title="Credit card offers deal" date="Friday, 11 November" body="Get exciting credit card in just 4 steps, instantly! A wide variety of credit cards to suit your needs" />
        </Box>

    </div>);

export default Events;