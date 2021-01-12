import React from "react";
import "./style.css";
/* import API from "../utils/API"; */
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function RandomQuote() {
	return (
		<Accordion defaultActiveKey="0">
			<Card>
				<Card.Header className="accordion text-center">
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
						<button
							class="d-flex align-items-center justify-content-between btn btn-link collapsed"
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="false"
							aria-controls="collapseOne"
						>
							GET INSPIRED
						</button>
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body className="quote text-center">
						Insert Motivational Quote Here
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
}

export default RandomQuote;
