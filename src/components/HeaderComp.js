import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
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
                              <h1>Coffe Kitty</h1>
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
                      
                      
                      
                  </div>
              </Navbar>
          </React.Fragment>
      );
  }
}

export default Header;