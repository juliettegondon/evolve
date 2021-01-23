import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Videos from "../components/Videos"
import { Image } from "react-bootstrap"

function VideoLibrary() {
  return (
    <div className="mb-2">
      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>E-VOLVE</h1>
        <h2>Video Library </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">

        <Image src="../../images/evolvepics1.jpeg" className="mb-2" fluid />
            <p> 
            <Videos></Videos>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoLibrary;