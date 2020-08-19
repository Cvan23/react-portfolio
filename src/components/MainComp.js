import React, { Component } from 'react';
import Header from './HeaderComp';
import Footer from './FooterComp';
import Home from './HomeComp';
import Story from './StoryComp';
import Cats from './CatsComp';
import Partners from './PartnersComp';

import { Switch, Route } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/story' component={Story} />
          <Route exact path='/cats' component={Cats} />
          <Route exact path='/partners' component={Partners} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main; 