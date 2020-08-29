import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {

  constructor(props) {
      super(props);

      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
  }

  toggleNav() {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }

  render() {
      return (
          <React.Fragment>
              
              <Jumbotron fluid>
                  
                  <header className="container">
                      <div className="row">
                          
                          <div className="col col-sm-3 col-md-4 mr-5">
                              <h1>Coffee Kitty</h1>
                              <h2>Rescue Cat Cafe</h2>
                              <a className="mr-2" href="http://instagram.com/"><i className="fa fa-2x fa-instagram"></i></a>
                              <a className="" href="http://facebook.com/"><i className="fa fa-2x fa-facebook"></i></a>
                              <a className="ml-2" href="http://twitter.com/"><i className="fa fa-2x fa-twitter"></i></a>
                          </div>
                      </div>
                  </header>
              </Jumbotron>

              <Navbar dark sticky="top" expand="md">
                  <div className="container">
                      <NavbarBrand className="float-left mb-4" href="/"><img src="/assets/images/catcoffeelogo.jpg" height="33" width="33" alt="coffee-kitty-logo" /></NavbarBrand>
                      <NavbarToggler onClick={this.toggleNav} />
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link" to="/story">
                                      <i className="fa fa-book fa-lg" /> Our Story
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/cats">
                                      <i className="fa fa-github-alt fa-lg" /> Our Cats
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/partners">
                                      <i className="fa fa-heart fa-lg" /> Community Partners
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/adopt">
                                      <i className="fa fa-heart-o fa-lg" /> Adoptions
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/yummy">
                                      <i className="fa fa-coffee fa-lg" /> Menu
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/store">
                                      <i className="fa fa-shopping-bag fa-lg" /> Shop
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/contactus">
                                      <i className="fa fa-address-card fa-lg" /> Contact Us
                                  </NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                      
                      
                      
                  </div>
              </Navbar>
          </React.Fragment>
      );
  }
}

export default Header;