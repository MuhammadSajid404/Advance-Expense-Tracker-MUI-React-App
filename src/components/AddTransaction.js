// import {Button, FormLabel, makeStyles, Paper, TextField } from '@material-ui/core';
// import React, { useContext, useState } from 'react';
// import { GlobalContext } from '../context/GlobalState';

// const useStyles = makeStyles({
//     MuiBoxRoot: {
//         color: '#fafafa',
//         boxSizing: 'border-box',
//         boxShadow: '1px 2px 1px #e64a19',
//         backgroundColor: '#ff5722',
//         width: '30%',
//         padding: '5px',
//         margin: '10px',
//     },
//     textField: {
//         display : 'flex',
//         width: '100px',
//         marginLeft: '10px',
//         paddingBottom: '10px',
//         marginTop: '10px',
//         fontWeight: '200'
//     },
//     input: {
//         color: 'white'
//     }, 
//     btnIncome: {
//         backgroundColor : '#4caf50',
//         marginLeft: '70px',
//         marginTop: '50px',
//         display: 'flex',
//         margin: '0.1rem',
//         borderRadius: '0 20px 0px 30px',
//         width: '35%'

//     },
//     btnExpense: {
//         backgroundColor : '#f44336',
//         marginLeft: '300px',
//         marginTop: '-37px',
//         display: 'flex',
//         margin: '0.1rem',
//         borderRadius: '0 20px 0px 30px',
//         width: '35%'
//     },
//     transactionForm: {
//         width: '100%',
//         height: '20%',
//         display: 'flex',
//         // textAlign: 'center',
//         // justifyContent: 'center',
//         flexDirection: 'column',
//       },
//       transactionFormLabel: {
//         fontSize: '1rem',
//         fontWeight: '600',
//         color: '#163172',
//         marginTop: '1.7rem',
//         marginBottom: '0.2rem',
//       }
// })

// // const income = amounts
// //     .filter(item => item > 0)
// //     .reduce((acc, item) => (acc += item), 0)
// //     .toFixed(2);

// //     const expense = (amounts
// //         .filter(item => item < 0)
// //         .reduce((acc, item) => (acc += item), 0) * -1)
// //         .toFixed(2);
    

// export const AddTransaction = () => {

//     const classes = useStyles();

//     const [text, setText] = useState('');
//     const [amount, setAmount] = useState();

//     const { addTransaction } = useContext(GlobalContext);
//     const { transactions } = useContext(GlobalContext);
//     const amounts = transactions.map(transaction => transaction.amount);

//     const onSubmit = e => {
//         e.preventDefault();

//         const newTransaction = {
//             id: Math.floor(Math.random() * 100000000),
//             text,
//             amount: +amount
//         }

//         addTransaction(newTransaction);
//     }

//     const additionHandler = () => {
//         if (amount === 0) {
//             alert ( 'Please enter a valid value!' )
//         }
//         const newTransaction = {
//             id: Math.floor(Math.random() * 100000000),
//             text,
//             amount: +amount
//         }

//         addTransaction(newTransaction);
//     }

//     const incomeHandler = (e) => {
//         e.preventDefault()
//         if (amount < 0) {
//             alert ( "You can't enter a negative value" )
//             setAmount("")
//             setText("")
//         }
//         setAmount(income)
//         additionHandler()
//     }

//     const expenseHandler = (e) => {
//         e.preventDefault()
//         if ( amount < 0 ) {
//             alert ( "You can't enter a negative value" )
//             setAmount("")
//             setText("")
//         }
//         setAmount(expense)
//         additionHandler()
//     }

//     return (
//         <div>
//             <Paper variant='outlined' style={{width: '45%', height: '70%'}}>
//             {/* <Box className={classes.MuiBoxRoot}>Add New Transaction</Box> */}
//             <form onSubmit={onSubmit} className={classes.transactionForm}>
//                 <FormLabel className={classes.transactionFormLabel}>Text</FormLabel>
//                 <TextField 
//                 value = {text}
//                 placeholder = 'Enter Description'
//                 defaultValue="Default Value"
//                 onChange = {e => setText (e.target.value)}
//                 />
//                 {/* // className={classes.textField} */}
//         {/* <div className="form-control">
//             <label 
//             htmlFor="text">
//                 Text
//                 </label>
//             <input type="text"
//             value={text} onChange={(e) => setText (e.target.value)} 
//             placeholder="Enter text..." />
//         </div> */}
//         <FormLabel className={classes.transactionFormLabel}>Amount</FormLabel>
//         <TextField 
//                 value = {amount}
//                 placeholder = 'Enter Text'
//                 onChange = {e => setAmount (e.target.value)}
//                 // className={classes.textField}
//                 />
//         {/* <div className="form-control">
//             <label 
//             htmlFor="amount">
//                 Amount
//                 <br />
//                 (negative - expense, positive - income)
//                 </label>
//             <input type="number" 
//             value={amount} onChange={(e) => setAmount (e.target.value)}
//             placeholder="Enter amount..." />
//         </div> */}
        
//         {/* <button className="btn">Add transaction</button> */}
//         <Button variant="contained" onClick={incomeHandler} className={classes.btnIncome}>
//         ADD INCOME
//       </Button>
//       <Button variant="contained" onClick={expenseHandler} className={classes.btnExpense}>
//         ADD EXPENSE
//       </Button>
//     </form>
//     </Paper>

//         </div>
//     )
// }
