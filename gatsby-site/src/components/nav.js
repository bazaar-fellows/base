import React from 'react';
import { Link } from 'gatsby'


const Nav = () => (
    <nav>
        <ul style={{
            listStyleType: `none`,
            color: `white`,
            margin: `0`,
            padding: `0`,
            }}
        >
            <li style={{
            paddingLeft: `10px`,
            float: `left`,
            textDecoration: `none`,
            display: `block`,
            }}
            >   
                <Link to="/products/">Shop All</Link>
            </li>
        </ul>
    </nav>
)

export default Nav