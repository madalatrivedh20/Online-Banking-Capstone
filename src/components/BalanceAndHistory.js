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

import { getCurrentUser } from '../service/api';
import useAppContext from '../AppStateContext';
import { useState } from 'react';
import { useEffect } from 'react';

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
  const { user } = useAppContext();

  const [userData, setUserData] = useState();

  useEffect(() => {
    (async () => {
      const response = await getCurrentUser(user.id);
      setUserData(response);
    })();
  }, []);

  return userData && (
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
          value={userData.accno}
          sx={{ display: 'block' }}
        />
        <TextField
          label="Account Balance"
          value={`${userData.balance}$`}
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

                {userData.transactions.length == 0 && (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> No Transactions to show
                    </TableCell>
                    <TableCell align="right">{""}</TableCell>
                    <TableCell align="right">{""}</TableCell>
                    <TableCell align="right">{""}</TableCell>
                  </TableRow>
                )}

                {userData.transactions.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.transactionDate}</TableCell>
                    <TableCell align="right">{row.transactionType}</TableCell>
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