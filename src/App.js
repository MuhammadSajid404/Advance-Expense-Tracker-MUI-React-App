import React from 'react';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';
import { CombineIEB } from './components/CombineIEB';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
    return (
        <GlobalProvider>
        <div>
            <Header />
            <div className="container"> 
            <CombineIEB />
            <TransactionList />
            </div>
        </div>
        </GlobalProvider>
    )
}

export default App;