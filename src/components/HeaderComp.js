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
                  <div className="container">
                      <div className="row">
                          <div className="col col-sm-4 align-self-center clearfix">
                              <img src="/assets/images/kittencup1.jpg" className="float-left clearfix" width="100%" />
                          </div>
                          <div className="col col-sm-3 col-md-4 align-self-center">
                              <h1>Coffee Kitty</h1>
                              <h2>Rescue Cat Cafe</h2>
                              <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                              <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                          </div>
                      </div>
                  </div>
              </Jumbotron>

              <Navbar dark sticky="top" expand="md">
                  <div className="container">
                      <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/catcoffeelogo.jpg" height="30" width="30" alt="coffee-kitty-logo" /></NavbarBrand>
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