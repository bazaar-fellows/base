import React from 'react';
import { Link } from 'gatsby';
import Auth from '../auth/auth';
import './nav.scss';


const Nav = () => (
    <nav>
        <ul>
            <li>   
                <Link to="/products/">SHOP ALL</Link>
            </li>

            <li>|</li>

            <Auth capability="create">
                <li>
                    <Link to="/addProduct/">ADD PRODUCT</Link>
                </li>
            </Auth>
        </ul>
    </nav>
)

export default Nav