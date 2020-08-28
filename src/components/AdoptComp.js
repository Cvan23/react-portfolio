import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardHeader, CardBody, CardTitle, CardSubtitle, Button, Media, Collapse } from 'reactstrap'

function Adopt(props) {
  return (
    <div className="col mt-5">
      <h2 className="text-lg-center">Adoption Success Stories!</h2>
      <CatPartners />
    </div>
  );
}

class CatPartners extends Component {

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
          <h3 className="page-header">Meet The Kitties and Their Newfound Humans!</h3>
          {cards.map(index => {
            return (
            <React.Fragment> 
              <Card style={{ marginBottom: '1rem' }} key={index}>
                <CardHeader className="card-subtitle" onClick={this.toggle} data-event={index}>Walter</CardHeader>
                <Collapse isOpen={collapse === index}>
                  <CardBody>
                    <div className="col">
                      <h3><em>How Wally Got His Groove Back!</em></h3>
                    <img src="/assets/images/wally.jpg" width="80%" />
                      <h4 className="mt-5">Walter found a great new home with a devoted human servant!</h4>
                    </div>
                  </CardBody>
                </Collapse>
              </Card>
                <hr />
              <Card style={{ marginBottom: '1rem' }} key={index}>
                <CardHeader className="card-subtitle" onClick={this.toggle} data-event={index}>Princess Meow Meow!</CardHeader>
                <Collapse isOpen={collapse === index}>
                  <CardBody>
                    <div className="col">
                      <h3><em>She went from tiny kitten to royalty!</em></h3>
                    <img src="/assets/images/koaface.jpg" width="80%" />
                      <h4 className="mt-5">She loves bossing her human around, playtime and taking naps!</h4>
                    </div>
                  </CardBody>
                </Collapse>
              </Card>
                <hr/>
              <Card style={{ marginBottom: '1rem' }} key={index}>
                <CardHeader className="card-subtitle" onClick={this.toggle} data-event={index}>Stuart!</CardHeader>
                <Collapse isOpen={collapse === index}>
                  <CardBody>
                    <div className="col">
                      <h3><em>Stuart and his human Missy make the Purrfect pair!</em></h3>
                    <img src="/assets/images/stuart1.jpg" width="80%" />
                      <h4 className="mt-5">Stuart is doing great in his new home, he loves taking cat naps, skateboarding and playing outside!</h4>
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




export default Adopt;