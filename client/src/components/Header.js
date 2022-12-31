import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';


const Header = () => {
  return (
    <Nav vertical>
  <NavItem>
    <NavLink href="/Profile">
      My Profile
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="/Animal">
      My Pets
    </NavLink>
  </NavItem>
</Nav>
  );
};

export default Header;