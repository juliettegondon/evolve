import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Journal from "../components/Journal"
function Mental() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>E-VOLVE</h1>
        <h2>connect your mind & body. </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Be kind to your mind.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            As web developers, we understand that the stresses of work and life tend to get the best of you. 
            It's time to stop pushing your mental health to the side. There is no time like the present to decide to improve your mindfulness.
           By implementing daily mindful activities and journaling, you can be mindful at work and in your personal life.
            </p>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
           <Journal></Journal>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Mental;
