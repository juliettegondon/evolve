import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ExerciseGrid from "../components/ExerciseGrid"

function Exercise() {
  return (
    <div id="myGrid" class="ag-theme-alpine">
      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1>E-VOLVE</h1>
        <h2> Exercise Journal </h2>
      </Hero>

      <Container style={{ marginTop: 30 }}>

        <Row>
          <Col size="md-12">
            <p> 
              <br></br>
            <b>Your Personal Exercise Log</b>
            <br></br>
            <ExerciseGrid></ExerciseGrid>
            </p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Exercise;