import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Media } from 'reactstrap'

function Shop(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <CardTitle className="ml-5">Shop With Us!</CardTitle>
          <img className="ml-5" src="/assets/images/coffee-shop.png" width="80%" />
        </div>
      </div>
    </div>
  );

}



export default Shop;