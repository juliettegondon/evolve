import React, { Component } from "react";
// import './App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columnDefs: [
				{
					headerName: "Podcast Title",
					field: "PodcastTitle",
					wrapText: true,
					resizable: true,
					checkboxSelection: true,
					filter: true,
					sortable: true,
					filterParams: {
						filterOptions: ["contains"],
					},
					width: 550,
				},
				{
					headerName: "Link",
					field: "href",
					wrapText: true,
					resizable: true,
					hide: true,
					width: 150,
				},
				{
					headerName: "Duration",
					field: "Duration",
					wrapText: true,
					resizable: true,
					sortable: true,
					width: 100,
				},
				{
					headerName: "Date",
					field: "Date",
					wrapText: true,
					resizable: true,
					// sortable: true,
					width: 150,
				},
			],
			rowData: [],
			rowHeight: 40,
		};
	}

	componentDidMount() {
		if (!sessionStorage.loginStatus) {
			alert("please log in !");
			this.props.history.push("/login");
		}

		fetch("podcasts.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((result) => result.json())
			.then((rowData) => this.setState({ rowData }));
	}

	onButtonClick = () => {
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data.href);
		window.open(
			`${selectedData}`,
			"popup",
			"width=600,height=600,scrollbars=no,resizable=no"
		);
	};

	render() {
		return (
			<div
				className="ag-theme-balham mb-2"
				style={{
					height: "700px",
					width: "900px",
				}}
			>

<div className="mb-2">
<Button className="ex btn-circle" onClick={this.onButtonClick}>
					Play Selected Podcast
				</Button>
</div>
			

				<AgGridReact
					onGridReady={(params) => (this.gridApi = params.api)}
					rowSelection="single"
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}
					rowHeight={this.state.rowHeight}
				></AgGridReact>
			</div>
		);
	}
}

export default withRouter(App);
