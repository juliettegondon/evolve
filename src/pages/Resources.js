import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Resources() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>Evolve</h1>
        <h2>Connect your mind & body. </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className= "text-center">RESOURCES</h1>
          </Col>
        </Row>
        <Row>

          <div className="col-6 text-center">
      <div className="card bg-light text-dark text-center">
        <div className="card-body">
          <h4 className="card-title"> <a href="https://www.google.com">Workout Class Finder</a> </h4>
          <p className="card-text">Find a virtual workout class</p>
        </div>
      </div>
    </div>

    <div className="col-6 text-center">
      <div className="card bg-light text-dark text-center">
        <div className="card-body">
          <h4 className="card-title"> <a href="https://www.google.com">Guided Meditation Library</a> </h4>
          <p className="card-text">Go to zen and back through your device</p>
        </div>
      </div>
    </div>

    <div className="col-6 text-center">
      <div className="card bg-light text-dark text-center">
        <div className="card-body">
          <h4 className="card-title"> <a href="https://www.google.com">Healthy Recipe Inspiration</a> </h4>
          <p className="card-text">Health starts in the kitchen</p>
        </div>
      </div>
    </div>

    <div className="col-6 text-center">
      <div className="card bg-light text-dark text-center">
        <div className="card-body">
          <h4 className="card-title"> <a href="https://www.google.com">Find an outdoor space</a> </h4>
          <p className="card-text">Search for a quiet space to unwind.</p>
        </div>
      </div>
    </div>

        </Row>
      </Container>
    </div>
  );
}

export default Resources;
