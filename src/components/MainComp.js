import React, { Component } from 'react';
//import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Header from './HeaderComp';
import Footer from './FooterComp';
import Home from './HomeComp';
import { TOPCARDS } from '../shared/topcards';
import { Switch, Route } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topcards: TOPCARDS
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main; 