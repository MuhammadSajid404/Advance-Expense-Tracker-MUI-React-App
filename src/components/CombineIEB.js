import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button, Card, CardContent, FormLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

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
    },
    MuiBoxRoot: {
        color: '#fafafa',
        boxSizing: 'border-box',
        boxShadow: '1px 2px 1px #e64a19',
        backgroundColor: '#ff5722',
        width: '30%',
        padding: '5px',
        margin: '10px',
    },
    textField: {
        display : 'flex',
        width: '100px',
        marginLeft: '10px',
        paddingBottom: '10px',
        marginTop: '10px',
        fontWeight: '200'
    },
    input: {
        color: 'white'
    }, 
    btnIncome: {
        backgroundColor : '#4caf50',
        marginLeft: '70px',
        marginTop: '40px',
        margin: '0.1rem',
        borderRadius: '0 20px 0px 30px',
        width: '35%',
        padding: '10px'
    },
    btnExpense: {
        backgroundColor : '#f44336',
        marginLeft: '340px',
        marginTop: '-43px',
        margin: '0.3rem',
        borderRadius: '0 20px 0px 30px',
        width: '35%',
        padding: '10px'
    },
    transactionForm: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50%',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        boxSizing: 'border-box',
        minHeight: '40vh',
      },
      transactionFormLabel: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#163172',
        marginTop: '1.7rem',
        marginLeft: '0.7rem',
        marginBottom: '0.2rem',
      }
    })
  
  

export const CombineIEB = () => {

    const classes = useStyles();

    const [text, setText] = useState('');
    let [amount, setAmount] = useState('');

    const { transactions, addTransaction } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const resetForm = () => {
        setText('');
        setAmount('')
    }

        const onSubmit = e => {
            e.preventDefault();

            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }
    
            addTransaction(newTransaction);
        }

        const additionHandler = () => {
            if (amount === 0 & amount === 'NaN' & amount === " ") {
                alert ( 'Please enter a valid value!' )
                return false
            }
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }
    
            addTransaction(newTransaction);
        }
    
        const incomeHandler = (e) => {
            e.preventDefault()
            if (amount < 0) {
                alert ( "You can't enter a negative value" )
                setAmount("")
                setText("")
                return false
            }
            setAmount(amount)
            additionHandler()
            resetForm()
        }
    
        const expenseHandler = (e) => {
            e.preventDefault()
            if ( amount < 0 ) {
                alert ( "You can't enter a negative value" )
                setAmount("")
                setText("")
                return false 
            }
            amount *= -1
            setAmount(amount)
            additionHandler()
            resetForm()
        }

        const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);
    
    return (
        <div>
        <Grid container spacing={1} justify="center">
            
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                <Card
                    style = {{
                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                        backgroundColor: '#90caf9',
                        margin: '25px',
                    }}>
                <CardContent>
                <Typography variant="button" gutterBottom className={classes.root}>BALANCE</Typography>
                <Typography gutterBottom className={classes.secondRoot}>${total}</Typography>
                </CardContent >
                </Card>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                <Card 
                    style={{
                        backgroundColor: '#aed581',
                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                        margin: '25px'
                }}>
                <CardContent>
                <Typography variant="button" gutterBottom className={classes.root}>INCOME</Typography>
                <Typography gutterBottom className={classes.secRoot}>{income}</Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                <Card 
                    style={{
                        backgroundColor: '#ef9a9a',
                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                        margin: '25px'
                    }}>
                <CardContent>
                <Typography variant="button" gutterBottom className={classes.root}>EXPENSE</Typography>
                <Typography gutterBottom className={classes.thrRoot}>{expense}</Typography>
                </CardContent>
                </Card>
            </Grid>
            
        </Grid>
    <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        {/* <Paper variant='outlined' style={{width: '80%', height: 'auto', marginLeft: '60px'}}> */}
        {/* <Box className={classes.MuiBoxRoot}>Add New Transaction</Box> */}
        <form onSubmit={onSubmit} className={classes.transactionForm}>
            <FormLabel className={classes.transactionFormLabel}>Text</FormLabel>
            <TextField
            value = {text}
            placeholder = 'Enter Description'
            onChange = {e => setText (e.target.value)}
            style={{marginLeft: '10px', marginRight: '10px'}}
            />

    <FormLabel className={classes.transactionFormLabel}>Amount</FormLabel>
    <TextField 
            value = {amount}
            placeholder = 'Enter Amount'
            onChange = {e => setAmount (e.target.value)}
            style={{marginLeft: '10px', marginRight: '10px'}}
            />
    
    <Button variant="contained" onClick={incomeHandler} className={classes.btnIncome}>
    ADD INCOME
  </Button>
  
  <Button variant="contained" onClick={expenseHandler} className={classes.btnExpense}>
    ADD EXPENSE
  </Button>
  
</form>

</Grid>
</Grid>
    </div>
    )
}
