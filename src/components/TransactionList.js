import React, {useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState'
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    trxList: {
        padding : '20px',
        marginLeft: '330px',
        marginTop: '30px',
        width: '100%'
    }
})

export const TransactionList = () => {
    const classes = useStyles();
    const { transactions } = useContext(GlobalContext);

    return (
        <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Paper className={classes.trxList} variant='outlined' style={{ height: 'auto'}}>
        <h3>History</h3>
          <ul className="list">
          {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/> )}
        </ul>
        </Paper>
        </Grid>
        </Grid>
    )
}