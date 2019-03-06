import React from 'react';

import HamburgerMenu from './HamburgerMenu'
import Houses from './Houses'
import Title from './Title'

const Main = () => {
    return (
        <div className='book'>
            <Houses />
            <HamburgerMenu />
            <Title />
        </div>
    );
};

export default Main;