import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap'

function Adopt(props) {
  return (
    <div className="col mt-5">
      <h1 className="text-lg-center">Adoption Success Stories!</h1>
      <CatPartners />
    </div>
  );
}

class CatPartners extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: 0 };
    }

    toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
    render() {
      const {collapse} = this.state;
      return (
        <div className="container">
            <h3 className="page-header">Meet Our Friends!</h3>
            <React.Fragment> 
              <Card style={{ marginBottom: '1rem' }} key="1">
                <CardHeader className="card-subtitle" onClick={this.toggle} data-event="1">Walter!</CardHeader>
                <Collapse isOpen={collapse === 1}>
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
              <Card style={{ marginBottom: '1rem' }} key="2">
                <CardHeader className="card-subtitle" onClick={this.toggle} data-event="2">Princess Meow Meow!</CardHeader>
                <Collapse isOpen={collapse === 2}>
                  <CardBody>
                    <div className="col">
                        <h3><em>She went from tiny kitten to royalty!</em></h3>
                        <img src="/assets/images/koaface.jpg" width="80%" />
                        <h4 className="mt-5">She loves bossing her human around, playtime and taking naps!</h4>
                    </div>
                  </CardBody>
                </Collapse>
              </Card>
              <hr />
              <Card style={{ marginBottom: '1rem' }} key="3">
                <CardHeader className="card-subtitle" onClick={this.toggle} data-event="3">Stuart!</CardHeader>
                <Collapse isOpen={collapse === 3}>
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

          </div>
      );
    }
};




export default Adopt;