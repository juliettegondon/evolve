import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style.css";

function NavButtons() {
	return (
		<div>
			<Button variant="light" size="lg" block>
				<Link className="navbar-brand" to="/exercise">
					Fitness Journal
				</Link>
			</Button>
			<Button variant="light" size="lg" block>
				<Link className="navbar-brand" to="/health">
					Personal Health Data
				</Link>
			</Button>
		</div>
	);
}

export default NavButtons;
