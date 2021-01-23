import React from "react";
import Hero from "../components/Hero";
/* import ResourceCard from "../components/ResourceCard" */
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";


function Resources() {
	return (
		<div>
			<Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
				<h1>E-VOLVE</h1>
				<h2>connect your mind & body. </h2>
			</Hero>
			<Container style={{ marginTop: 30 }}>
				<Row>
					<Col size="md-12">
						<h1 className="text-center">RESOURCES</h1>
					</Col>
				</Row>

				<Row>
				<Col size="md-12">
						<div className="resource text-center">
							<div className="card bg-light text-center">
								<div className="card-body">
									<h4 className="card-title">
										{""}
										<a href="https://www.chelseapiers.com/fitness/events/social-events/virtual-fitness-classes/">
											Free Virtual Classes
										</a>{" "}
									</h4>
									<p className="card-text">
										Enroll in an online class to fit your schedule! 
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col size="md-12">
						<div className="resource text-center">
							<div className="card bg-light text-center">
								<div className="card-body">
									<h4 className="card-title">
										{""}
										<Link to="/videolibrary">
											Wellness Video Library
										</Link>
									</h4>
									<p className="card-text">
										Go to zen and back through your device
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col size="md-12">
						<div className="resource text-center">
							<div className="card bg-light text-dark text-center">
								<div className="card-body">
									<h4 className="card-title">
										{" "}
										<Link to="/podcast">
											Inspirational Podcast Library
										</Link>
									</h4>
									<p className="card-text">
										Tune in and learn from the experts
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Resources;
