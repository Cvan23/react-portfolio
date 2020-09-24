import React, { useState }  from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody,
  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


function Shop() {
  return (
    <div>
      <ShopCard/>
    </div>
  )
}
  


function ShopCard() {

  // const ModalExample = (props) => {
  //   const {
  //     buttonLabel,
  //     className
  //   } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
  return (
    <div className="col">
      <div className="card">
      <div className="card-header">
          <h1>Shop</h1>
        </div>
        <CardGroup>
          <Card>
            <CardImg className="card-img" top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Coffee Kitty T-Shirts</CardTitle>
              <CardSubtitle>All sizes available</CardSubtitle>
              <CardText>$15</CardText>
              <Button onClick={toggle}>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg className="card-img" top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Coffee Kitty Hoodies</CardTitle>
              <CardSubtitle>All sizes available</CardSubtitle>
              <CardText>$30</CardText>
              <Button onClick={toggle}>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg className="card-img" top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Coffee Kitty Hats</CardTitle>
              <CardSubtitle>Baseball and Beanies</CardSubtitle>
              <CardText>$20</CardText>
              <Button onClick={toggle}>Add to cart</Button>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg className="card-img" top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Coffee Kitty Mugs</CardTitle>
              <CardSubtitle>Purr-fect for home!</CardSubtitle>
              <CardText>$15</CardText>
              <Button onClick={toggle}>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg className="card-img" top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Coffee Kitty Travel Mugs</CardTitle>
              <CardSubtitle>Purr-fect for on the go!</CardSubtitle>
              <CardText>$20</CardText>
              <Button onClick={toggle}>Add to cart</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg className="card-img" top width="100%" src="/assets/images/cat-card1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Coffee Kitty Bumper Sticker</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>$5</CardText>
              <Button onClick={toggle}>Add to cart</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
      <div>
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Coffee Kitty Store Coming Soon!</ModalHeader>
        <ModalBody>
          <img className="mt-1" src="/assets/images/coffee-shop.png" width="70%" alt="story cat" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  );
  

}



export default Shop;