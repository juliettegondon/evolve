import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

function ContactBody() {
	return (
		<div className="text-center">
			<div>
				<Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
					<h1>E-VOLVE</h1>
					<br></br>
					<h2> Contact Us</h2>
				</Hero>
				<Container style={{ marginTop: 30 }}>
					<Row>
						<Col size="md-12">
							<h1>Contact Us:</h1>
							<p>
								For website questions and help please email us at{" "}
								<a href="mailto:evolve@e-volve.us">evolve@e-volve.us</a>.
							</p>
							<p>
								For deployment information please visit
								<a href="	https://github.com/juliettegondon/evolve">
									{" "}
									our repository
								</a>
							</p>

							<p>
								Think we're super cool and love what we did? Hire the
								developers!
							</p>
						</Col>
					</Row>
				</Container>
				<Col size="md-12 align-center">
					<Container>
						<Image
							src="https://media-exp1.licdn.com/dms/image/C5603AQHovJQBilPXhg/profile-displayphoto-shrink_200_200/0/1540493113555?e=1616630400&v=beta&t=aH1yGOtFERFS_Sh15aypJ41KHGeRzeoGDmaBrgcWEw4"
							roundedCircle
							thumbnail
						/>
						<h2>
							<a href="https://juliettegondon.github.io/portfolioround3/">
								Juliette{" "}
							</a>
              <a
									className="button fab fa-github"
									href="https://github.com/juliettegondon"
								></a>
						</h2>
						<Image src="../../images/andrea.jpg" roundedCircle thumbnail />
						<h2>
							<a href="https://github.com/andreahayward">
								Andrea{" "}
			
							</a>
              <a
									className="fab fa-github"
									href="https://github.com/andreahayward"
								></a>
						</h2>

						<Image
							src="https://media-exp1.licdn.com/dms/image/C4D03AQGt-xXRsL46zQ/profile-displayphoto-shrink_200_200/0/1606332807206?e=1616630400&v=beta&t=yiNnBx6648bPEpHise_utJxJ4yDWLQBBme09ZdcylWU"
							roundedCircle
							thumbnail
						/>
						<h2>
							<a href="https://www.linkedin.com/in/frank-salvo-4093a08/">
								Frank{" "}
								<a
									className="button fab fa-github"
									href="https://github.com/fhsal"
								></a>
							</a>
						</h2>
						<Image
							src="https://avatars.githubusercontent.com/u/10477863?s=460&u=1d16538219c6889916ba5f02e1e9406ade9806af&v=4"
							roundedCircle
							thumbnail
						/>
						<h2>
							<a href="https://medium.com/davidoffkilter">
								Doug{" "}
								<a
									className="button fab fa-github"
									href="https://github.com/dougdavidoff"
								></a>
							</a>
						</h2>
					</Container>
				</Col>
			</div>
		</div>
	);
}

export default ContactBody;
