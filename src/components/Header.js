import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export const Header = () => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar variant="dense">
                <Typography variant="h6">Expense Tracker</Typography>
            </Toolbar>
        </AppBar>
    )
} 
