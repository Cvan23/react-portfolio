import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';


function Shop(props) {
  return (
    <div className="col">
      <div className="card">
      <div className="card-header">
          <h1>Shop</h1>
        </div>
        <CardGroup>
          <Card>
            <CardImg top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Coffee Kitty Gear!</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Coffee Kitty Gear!</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Coffee Kitty Gear!</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Coffee Kitty Gear!</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Coffee Kitty Gear!</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Coffee Kitty Gear!</CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );

}



export default Shop;