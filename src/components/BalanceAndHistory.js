import React, { useContext } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useAuth from '../AuthContext';

function createData(
  id,
  date,
  type,
  amount,
) {
  return { id, date, type, amount };
}

const rows = [
  createData('1', '04/11/2022', "savings", 20000),
  createData('2', '04/11/2022', "savings", 2000),
  createData('3', '04/11/2022', "savings", 30000),
];

const BalanceAndHistory = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Typography variant="h3" align="center">
        Account Details
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center">

        <TextField
          label="Account Number"
          variant="standard"
          disabled
          value={user.accountNo}
          sx={{ display: 'block' }}
        />
        <TextField
          label="Account Balance"
          value={`${user.balance}$`}
          variant="standard"
          disabled
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: '30px' }}>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Transcation Id</TableCell>
                  <TableCell align="right">TransDate</TableCell>
                  <TableCell align="right">TransType</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.transactions.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>

    </Box>
  );
};

export default BalanceAndHistory;