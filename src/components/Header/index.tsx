import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Container } from 'reactstrap';
import Navigation from './Navigation';

type HeaderState = {
  isNavBarOpen: boolean;
};

class Header extends React.Component<{}, HeaderState> {
  public state = {
    isNavBarOpen: false
  };
  public toggle = () => {
    this.setState(prevState => ({ isNavBarOpen: !prevState.isNavBarOpen }));
  };
  public render() {
    return (
      <Navbar color="light" light={true} expand="md" className="border-bottom">
        <Container>
          <NavbarBrand tag={RouterLink} exact={true} to="/">
            Words
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isNavBarOpen} navbar={true}>
            <Navigation />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
