import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/landing">
				E-VOLVE
			</Link>
			<div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							to="/Mental"
							className={
								window.location.pathname === "/mental"
									? "nav-link active"
									: "nav-link"
							}
						>
							Mind
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to="/Physical"
							className={
								window.location.pathname === "/physical" ||
								window.location.pathname === "/Physical"
									? "nav-link active"
									: "nav-link"
							}
						>
							Body
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to="/Resources"
							className={
								window.location.pathname === "/resources"
									? "nav-link active"
									: "nav-link"
							}
						>
							Resources
						</Link>
					</li>
				</ul>
			</div>
		<div className = "container-fluid justify-content-end ">
			<NavDropdown title="My Account" className="basic-nav-dropdown">
			<NavDropdown.Item href="/myaccount">View Account</NavDropdown.Item>
				<NavDropdown.Item href="#">Settings</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#">Log Out</NavDropdown.Item>
			</NavDropdown>
      </div>
		</nav>
	);
}

export default NavBar;
