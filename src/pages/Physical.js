import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavButtons from "../components/NavButtons"

function Physical() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>E-VOLVE</h1>
        <h2>connect your mind & body. </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">Physical Health Center</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>This is your hub for keeping track of your fitness and personal health.
              Whether you’re a beginner who’s starting your workout journey, 
              a long time triathlete, or you're anywhere in between...
             our tracking tools are great for keeping you motivated, 
             and for holding you accountable when life gets busy. 
             Access your health information, personal statistics here. 
            </p>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
          <NavButtons></NavButtons>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Physical;
