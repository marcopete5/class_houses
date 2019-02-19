import React from 'react';

const Navbar = (props) => {
    return (
        <ul className='hamNav'>
            <span onClick={props.toggle}>X</span>
            <li>Gryfferin</li>
            <li>Slytherpuff</li>
            <li>Ravendor</li>
            <li>Huffleclaw</li>
        </ul>
    );
};

export default Navbar;