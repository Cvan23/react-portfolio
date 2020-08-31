import React, { useState, Component } from 'react';
import { useSpring, animated as a, animated } from 'react-spring'
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Media } from 'reactstrap'
import { render } from 'react-dom';


function Home() {
  return (
    <div className="row row-content">
      <div className="col">
        
        <CatCard />
      </div>
    </div>
  )
}


function CatCard() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <React.Fragment>
    <Card className="container-fluid">
      <CardTitle className="card-header row">Welcome to Coffee Kitty!</CardTitle>
      <CardBody className="row">
      <Col className="d-flex ml-5">
      <div onClick={() => set(state => !state)}>
        <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
      </div>
      </Col>
      
      
      
      </CardBody>
    </Card>
    </React.Fragment>
  )
}



export default Home;