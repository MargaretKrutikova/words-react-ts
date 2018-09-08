import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => (
  <Nav navbar={true}>
    <NavItem>
      <NavLink tag={RouterLink} exact={true} to="/">
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={RouterLink} to="/list/page">
        List
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={RouterLink} to="/add">
        Add
      </NavLink>
    </NavItem>
  </Nav>
);

export default Navigation;
