import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function ResourceCard(props) {
	return (
		<div>
            <div className="resource text-center">
			<div className="card bg-light text-dark text-center">
				<div className="card-body">
                <h4 className="card-title"><a href={props.title}></a></h4>
					<p className="card-text">{props.content}</p>
				</div>
			</div>
            </div>
		</div>
	);
}

export default ResourceCard;
