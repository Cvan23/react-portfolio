import React, { Component } from 'react';
import Header from './HeaderComp';
import Footer from './FooterComp';
import Home from './HomeComp';
import Story from './StoryComp';
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
          <Route exact path='/' component={Home} />
          <Route exact path='/story' component={Story} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main; 