import React, { useContext } from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles({
    root : {
        color : '#212121',
        fontWeight : 'bold'
    },
    secondRoot : {
        color : '#311b92',
        fontWeight : 'bold'
    }
})

export const Balance = () => {

    const classes = useStyles();

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <Grid container>
            <Grid item xs={6}>
        <Card
        style = {{
            maxWidth: 300,
            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fafafa",
            margin: '25px',
        }}>
            <CardContent>
            <Typography variant="button" gutterBottom className={classes.root}>BALANCE</Typography>
            <Typography gutterBottom className={classes.secondRoot}>${total}</Typography>
            </CardContent >
        </Card>
        </Grid>
        </Grid>
    )
}