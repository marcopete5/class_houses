import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>HOME</Link>
            <Link to='/triwizard' >TRI-WIZARD</Link>
        </div>
    );
};

export default Header;