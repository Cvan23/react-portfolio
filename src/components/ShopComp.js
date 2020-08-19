import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Media } from 'reactstrap'

function Shop(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <CardTitle>Shop With Us!</CardTitle>
          <img src="/assets/images/coffee-shop.png" width="100%" />
        </div>
      </div>
    </div>
  );

}



export default Shop;