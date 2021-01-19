import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function ContactUs () {
    return (
        <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>E-VOLVE</h1>
        <h2>connect your mind & body. </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <div>
            <h1><b>Contact Us</b></h1>
            <hr>
            <p>For website questions and help please email evolve@evolve.com</p>
            <hr>
            <p>For deployment information please visit https://github.com/juliettegondon/evolve</p>
            </hr>
            </hr>
            </div>
          </Col>
        </Row>
      </Container>

        </div>

    );
};

export default ContactUs;