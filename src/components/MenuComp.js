import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Media } from 'reactstrap'

function Menu(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <CardTitle className="ml-5">Menu</CardTitle>
          <img className="ml-5" src="/assets/images/menu2.png" width="80%" />
        </div>
      </div>
    </div>
  );

}



export default Menu;