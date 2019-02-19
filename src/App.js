import React from 'react';
import './App.css'

import HamburgerMenu from './HamburgerMenu'
import Houses from './Houses'
import Title from './Title'

const App = () => {
    return (
        <div className='book'>
            <Houses />
            <HamburgerMenu />
            <Title />
        </div>
    );
};

export default App;