import React from 'react';
import './App.css'

import Main from './Main';
import Header from './Header';
import Triwizard from './Triwizard';

import { Switch, Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
        <Header />
        
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/triwizard' component={Triwizard} />
        </Switch>   
        </div>
    );
};

export default App;