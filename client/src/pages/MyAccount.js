import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

let user = ' user'
let name = ' name'
let email = ' email'
let date = ' date'

function MyAccount() {

    if (sessionStorage.user){user = ' ' + sessionStorage.user}
    if (sessionStorage.fullName){name = ' ' + sessionStorage.fullName}
    if (sessionStorage.email){email = ' ' + sessionStorage.email}
    if (sessionStorage.registerDate){date = ' ' + sessionStorage.registerDate}

	return (
		<div className="text-center">
			<div>
				<Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
					<h1>E-VOLVE</h1>
					<br></br>
					<h2>Account Information</h2>
				</Hero>
				<Container style={{ marginTop: 30 }}>
					<Row>
						<Col size="md-12">
							<h1 className="text-center">{name+"'s Account Information:"}</h1>
                            <p></p>
                            <h3 className="text-center">{'Name:' + name} </h3>
                            <h3 className="text-center">{'Username:' + user} </h3>
                            <h3 className="text-center">{'Email:' + email} </h3>
                            <h3 className="text-center">{'Member Since:' + date} </h3>

						</Col>
					</Row>
				</Container>
				
			</div>
		</div>
	);
}

export default MyAccount;