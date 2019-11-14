import React from 'react';
import {Link} from 'react-router-dom'


//function based Component

function Header(){
    return (

        <header >
            <Link style={Hstyle} to='/'>HOME</Link> | <Link style={Hstyle} to='/about'>About</Link>
        </header>
    )
}




export default Header;




const Hstyle={
    padding: `10px`,
    textAlign:`center`,
    color: `white`,
    textShadow: `1px 1px black `,
}