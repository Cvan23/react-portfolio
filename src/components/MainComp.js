import React, { Component } from 'react';
//import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Header from './HeaderComp';
import { TOPCARDS } from '../shared/topcards';
import { Switch } from 'react-router-dom';


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

        </Switch>
      </div>
    )
  }
}

export default Main; 