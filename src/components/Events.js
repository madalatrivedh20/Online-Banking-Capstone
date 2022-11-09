import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAppContext from '../AppStateContext';

function handleClick() {
    alert('Registered!')
}

function EventsCard({ title, date, body }) {
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {date}
            </Typography>
            <Typography variant="body2">
                {body}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClick}>Register</Button>
        </CardActions>
    </React.Fragment>
}


function Events() {
    <div>
        <h1>Events</h1>
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

    </div>
}
export default Events;