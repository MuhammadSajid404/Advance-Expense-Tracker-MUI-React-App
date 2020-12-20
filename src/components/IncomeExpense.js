import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles({
  root : {
      color : '#212121',
      fontWeight : 'bold'
  },
  secRoot : {
      color : '#43a047',
      fontWeight : 'bold'
  },
  thrRoot : {
      color : '#e53935',
      fontWeight : 'bold'
  },
  root1 : {
      color : '#212121',
      fontWeight : 'bold'
  },
  secondRoot : {
      color : '#311b92',
      fontWeight : 'bold'
  }
  })

export const IncomeExpense = () => {

    const classes = useStyles();
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <Grid container justify='center' spacing={3}>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card style={{backgroundColor: '#aed581'}}>
              <CardContent>
              <Typography className={classes.root}>INCOME</Typography>
              <Typography className={classes.secRoot}>{income}</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card style={{backgroundColor: '#ef9a9a'}}>
              <CardContent>
                <Typography className={classes.root}>EXPENSE</Typography>
                <Typography className={classes.thrRoot}>{expense}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>    
    )
}
