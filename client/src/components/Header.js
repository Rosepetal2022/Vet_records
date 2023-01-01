import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';


const Header = () => {
    return (
        <Nav className="main-header" vertical>
             <NavItem>
                <NavLink href="/Profile" id="header-link">
                    My Profile
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/Animal" id="header-link">
                    My Pets
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default Header;