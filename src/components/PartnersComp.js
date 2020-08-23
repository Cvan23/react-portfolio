import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardHeader, CardBody, CardTitle, CardSubtitle, Button, Media, Collapse } from 'reactstrap'

function Partners(props) {
  return (
    <div className="col mt-5">
      <h2 className="text-lg-center">Community Partners</h2>
      <ComPartners />
    </div>
  );
}

class ComPartners extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: 0, cards: [1] };
  }
  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }
  render() {
    const {cards, collapse} = this.state;
    return (
      <div className="container">
          <h3 className="page-header">Meet Our Friends!</h3>
          {cards.map(index => {
            return (
            <React.Fragment> 
              <Card style={{ marginBottom: '1rem' }} key={index}>
                <CardHeader onClick={this.toggle} data-event={index}>Pounce Play and Stay</CardHeader>
                <Collapse isOpen={collapse === index}>
                  <CardBody>
                    <div className="col">
                      <h4><em>Delux Cat Boarding</em></h4>
                      <img src="/assets/images/pounce1.jpg" />
                      <h4 className="mt-5">Pounce Play and Stay isn't your typical boarding  environment, more like "home away from home." </h4>
                    </div>
                  </CardBody>
                </Collapse>
              </Card>
                <hr />
              <Card style={{ marginBottom: '1rem' }} key={index}>
                <CardHeader onClick={this.toggle} data-event={index}>The Pixie Project</CardHeader>
                <Collapse isOpen={collapse}>
                  <CardBody>
                    <div className="col">
                        <h4><em>Changing the Face of Animal Rescue</em></h4>
                        <img src="/assets/images/pixie1.jpg" />
                        <h4 className="mt-5">The Pixie Project is a non-profit animal adoption center and rescue. We offer a variety of services to the public. </h4>
                    </div>
                  </CardBody>
                </Collapse>
              </Card>
            </React.Fragment>
              
            )
          })}     
  
        </div>
    );
  }
}






export default Partners;