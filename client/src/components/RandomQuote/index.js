import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";


class RandomQuote extends Component {
	state = {
	  quote: "",
	  author: "",
	}
  
	apiReq = () => {
	  API.getQuote().then((response) => {
		  const randNum = Math.floor(Math.random() * response.data.length)
		  const quote = response.data[randNum].text
		  const author = response.data[randNum].author
		  console.log(quote)
		  this.setState({
			  quote: quote,
			  author: author
		  });
		  
	  });
	}
	componentDidMount() {
	  this.apiReq()
	}
  render() {
	return (
		<Accordion defaultActiveKey="0">
			<Card>
				<Card.Header className="accordion text-center">
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
						<button
							className="d-flex align-items-center justify-content-between btn btn-link collapsed"
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="false"
							aria-controls="collapseOne"
						> GET INSPIRED. 
						</button>
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body className="accordion text-center">
					"{this.state.quote}" <br></br> - {this.state.author}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
}
}

export default RandomQuote;
