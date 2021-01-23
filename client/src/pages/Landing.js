import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import RandomQuote from "../components/RandomQuote"
import { Image } from 'react-bootstrap'

let user = ' user'

function Landing () {

  if (sessionStorage.user){user = ' ' + sessionStorage.user}

  return (

    

    <div>

      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>E-VOLVE</h1>
        <h2>connect your mind & body </h2>
      </Hero>
      <Container style={{ marginTop: 35 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">{'welcome' + user} </h1>
          </Col>
        </Row>
        


        <Row>
          <Col size="md-12">
          <RandomQuote></RandomQuote>
          </Col>
        </Row>
      
        <div>
        <Row>
          <Col size="md-12">
            <p>
              Welcome to E-Volve. Live life with less stress, while actively working 
              on your personal wellness evolution. Stronger. Healthier. More resilient. Happier.
              Manage it all, <em>right here.</em>
      
              <br>
              </br>
              Whether you want to get into better physical shape, 
              become more mindful and manage feelings and thoughts, or even keep track of your health data and informatics, 
              let E-Volve be your private online journal and resource library.
            </p>
            <Image src="../../images/evolveskyscape.jpeg" className="mb-2" fluid style={{ marginBottom: 5 }}/>

  
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  )}

export default Landing;
