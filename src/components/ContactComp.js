import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Media, Form, FormGroup, Input, Label, FormText, CardHeader } from 'reactstrap'

function Contact(props) {
  return (
    <div>
      <div className="col ml-5">
      <img className="mt-3 mb-3" src="/assets/images/catcoffeelogo.jpg" width="20%" />
      </div>
      <ContactUs />
    </div>
  );

}

class ContactUs extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};

    this.handleContact = this.handleContact.bind(this);
  }

  handleContact(event) {
    alert(`Name: ${this.username.value} Email: ${this.email.value}`);
    
    event.preventDefault();
}

render() {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <h4>Contact Us! <em>Come by or follow us online for weekly updates!</em></h4>
        </CardHeader>
        <CardBody className="row">
        <div class="col-sm-6">
          <a role="button" className="fa fa-map-marker fa-lg" href="https://www.google.com/maps/place/3409+SE+34th+Ave,+Portland,+OR+97202/@45.4968176,
          -122.6314802,17z/data=!3m1!4b1!4m5!3m4!1s0x5495a07ec066a0d3:0x8186caa0c3169a2f!8m2!3d45.
          4968176!4d-122.6292915?hl=en&authuser=0" target="-blank">
          <address>
              3409 SE 34th Ave<br />
              Portland, OR 97202<br />
              U.S.A.
          </address>
          </a>
        </div>
        <div class="col-sm-6">
          <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone fa-lg">
          </i> 1-206-555-1234</a><br />
          <a role="button" className="btn btn-link" href="mailto:coffeekitty@outlook.com"><i className="fa fa-envelope-o fa-lg">
          </i> coffeekitty@outlook.com</a>
        </div>
        </CardBody>
      </Card>
      <br/>
      <Card>
        <CardHeader><h4>Send us your feedback</h4></CardHeader>
        <CardBody>
          <Form onSubmit={this.handleContact}>
            <FormGroup>
              <Label htmlFor="username">Name</Label>
              <Input type="text" id="username" name="username" innerRef={input => this.username = input} placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" innerRef={input => this.email = input} placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="feedback">Feedback</Label>
              <Input type="textarea" name="feedback" placeholder="Feedback" />
            </FormGroup>
            <Label htmlFor="feedback">May we contact you?</Label>
            <FormGroup check>
              <Label check htmlFor="yes">
              <Input type="radio" name="radio1" /> 
              Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check htmlFor="no">
              <Input type="radio" name="radio1" /> 
              No
              </Label>
            </FormGroup>
            <Button outline color="" type="submit">Send Feedback</Button>
          </Form>
        </CardBody>
      </Card>

    </React.Fragment>
  )
}


}



export default Contact;