import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Media } from 'reactstrap'

function Shop(props) {
  return (
    <div className="col">
      <div className="card">
      <div className="card-header">
          <h1>Shop</h1>
        </div>
        <div className="card-body">
          <img className="ml-5" src="/assets/images/coffee-shop.png" width="80%" />
        </div>
      </div>
    </div>
  );

}



export default Shop;