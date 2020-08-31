import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Media } from 'reactstrap'

function Menu(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h1>Menu</h1>
        </div>
        <div className="card-body">
          <img className="ml-5" src="/assets/images/menu2.png" width="80%" />
        </div>
      </div>
    </div>
  );

}



export default Menu;