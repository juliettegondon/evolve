import React, { Component } from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import Col from "../Col";
import Slider from "../Slider";
import { withRouter } from "react-router-dom";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			date:"",
			mood:"",
			reflection:"",
		}
	}

	componentDidMount(){
		if (!sessionStorage.loginStatus) {
			alert("please log in !");
			this.props.history.push("/login");
		}

		let today = new Date();
		this.setState({ date:today }, this.getData);
		console.log(this.state.date)
	}

	getData = () => {
		let email = sessionStorage.email;
		console.log(email);
		fetch("/api/mind/email/" + email, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			}
		}) 
		.then((result) => result.text())
		.then((result) => console.log("mind result init" + result))
/* 			.then((mood) => this.setState({ mood: mood.moodData }))
			.then((reflection) => this.setState({ reflection: reflection.reflectionData}))
			.catch((error) => {
				fetch("exerciseTemplate.json", {
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				})
					.then((result) => result.json())
					.then((mood) => this.setState({ moodData }))
					.then((reflection) => this.setState({ reflection: reflection.reflectionData}))
			});  */
	};
	

render(){
	return (
		<div>
			<Col size="md-12">
				<Card>
					<Card.Body>
						<InputGroup className="mb-2">
							<InputGroup.Prepend>
								<InputGroup.Text></InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Your mood today in a few words."
								aria-label="Your mood today in a few words."
							/>
						</InputGroup>

						<ButtonGroup size="lg" className="mb-2">
							<Button className="mood btn-circle" value="1">
								😌
							</Button>
							<Button className="mood btn-circle" value="2">
								😄
							</Button>
							<Button className="mood btn-circle" value="3">
								🥰
							</Button>
							<Button className="mood btn-circle" value="4">
								😭
							</Button>
							<Button className="mood btn-circle" value="5">
								😡
							</Button>
							<Button className="mood btn-circle" value="6">
								😴
							</Button>
						</ButtonGroup>

						<InputGroup className="mb-2">
							<InputGroup.Prepend>
								<InputGroup.Text> Daily Reflection </InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Not sure what to write? Try listing 5 things you're grateful for today."
								as="textarea"
								aria-label="Daily Reflection"
							/>
						</InputGroup>

						<Slider></Slider>



						<button type="submit" className="btn btn-primary myButton">
							Save Reflection
						</button>
					</Card.Body>
				</Card>
			</Col>
		</div>
	);
}
}


export default withRouter(App);
