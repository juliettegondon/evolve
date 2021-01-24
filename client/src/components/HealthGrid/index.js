import React, { Component} from 'react';
import './style.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Picker from '../Picker'
import { getWeek } from 'date-fns'
import { withRouter} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import Col from "../Col";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearWeek: '',
      gridData: '',
      saveFlag: false,
      columnDefs: [
        {
          headerName: 'Day',
          field: 'day',
          wrapText: true,
          resizable: true,
          width: 130,

          },
        {
          headerName: 'BP Systolic',
          field: 'bpSystolic',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 100,
          type: 'numberColumn' 
        },
        {
          headerName: 'BP Diastolic',
          field: 'bpDiastolic',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 100,
        },
        {
          headerName: 'Weight',
          field: 'weight',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 80,
        },
        {
          headerName: 'Sugar AM',
          field: 'sugarAM',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 80,
        },
        {
          headerName: 'Sugar PM',
          field: 'sugarPM',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 80,
        },
        {
          headerName: 'Sleep hrs',
          field: 'sleep',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 80,
        },
        {
          headerName: 'Notes',
          field: 'notes',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 500,
        }
      ],
      rowData: [],

    rowHeight: 60,
    animateRows: true,
    };
  }

componentDidMount() {

  if (!sessionStorage.loginStatus){

    alert("please log in !")
    this.props.history.push('/login')
  }
    let emailx = sessionStorage.user;
    let today = new Date();
    let startYearWeek = today.toJSON().substring(0, 4) + "-" + getWeek(today)
  
    this.setState({yearWeek: startYearWeek}, this.getData)

    }

getData = () =>{
  fetch('/api/health/' + this.state.yearWeek, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    .then(result => result.json())
    .then(rowData => this.setState({ rowData:rowData.healthData }))
    .then(saveFlag => this.setState({saveFlag: true}))
    .catch((error)=>
    {
      fetch('healthTemplate.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }})
        .then(result => result.json())
        .then(rowData => this.setState({ rowData }))
        .then(saveFlag => this.setState({saveFlag: false}))
    }
    )
}

saveWeek = (gridData) =>{
  fetch('/api/health/', {
    headers : {'Content-Type': 'application/json', 'Accept': 'application/json'},
    method: 'POST',
    body: gridData})
    .then(result => result.json())
    .then(rowData => this.setState({ rowData }))
    .catch((error)=>{
      console.log(error)
})
this.getData()
}

eraseWeek = () =>{
  fetch('/api/health/' + this.state.yearWeek, {
    method: 'DELETE',
  })
    .then(result => result.text())
    .then(result=> console.log("delete result: " + result))
    .catch((error)=>{
      console.log(error)
})
this.getData()
}

clearGrid = () => {

  fetch('healthTemplate.json', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    .then(result => result.json())
    .then(rowData => this.setState({ rowData }))
    .then(saveFlag => this.setState({saveFlag: false}))
}

replaceWeek = (gridData) =>{

  if (!this.state.saveFlag) { this.saveWeek(gridData)
  }
  else {
    this.eraseWeek()
    this.saveWeek(gridData)
  }
}

  onReplaceButtonClick = () => {
    this.gridApi.selectAll();
    const selectedUpdateNodes = this.gridApi.getSelectedNodes();
    const selectedUpdateData = selectedUpdateNodes.map(node => node.data);
    let email = sessionStorage.email;
    let gridSave = `[{"yearWeek": "${this.state.yearWeek}", "key": "${email + this.state.yearWeek}", "userID": "Bob", "healthData": ${JSON.stringify(selectedUpdateData)}}]`;
    console.log(gridSave);
    this.setState({gridData: gridSave})

  

    

    this.replaceWeek(gridSave)
    const selectedDataString = selectedUpdateData
    .map(node => `yearWeek: ${this.state.yearWeek},  Day: ${node.day}, bpSystolic: ${node.bpSystolic}, bpDiastolic: ${node.bpDiastolic}, Weight: ${node.weight}, sugarAM: ${node.sugarAM}, sugarPM: ${node.sugarPM}, Sleep: ${node.sleep}, Notes: ${node.notes}`)
      .join(', ');
    ;
  };

pickerHandler= (date)=> {
  console.log(date)
  let pickedDate = new Date(date).toJSON().substring(0, 4) + "-" + getWeek(date)


   this.setState({yearWeek: pickedDate},  this.getData)
}

onBtnExport = () => {
  this.gridApi.selectAll();
  const selectGridText = this.gridApi.exportDataAsCsv();
  console.log(selectGridText);
}


  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '1200px'
        }}
      >

<div>
					<Col size="md-4">
						<Picker action={this.pickerHandler}></Picker>
						<ButtonGroup size="sm" className="mb-2">
							<Button
								className="ex btn-circle"
								onClick={this.onReplaceButtonClick}
							>
								Save Week
							</Button>
							<Button className="ex btn-circle ml-1" onClick={this.clearGrid}>
								Clear Grid
							</Button>
							<Button className="ex btn-circle ml-1" onClick={this.eraseWeek}>
								Delete Week
							</Button>
						</ButtonGroup>
					</Col>
				</div>

      

        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          animateRows={this.state.animateRows}
          rowHeight={this.state.rowHeight}
        ></AgGridReact>

        
        <Button className="btn-circle" onClick={this.onBtnExport}>     Export Medical Records</Button>
        
      
      </div>
    );
  }
}

export default withRouter(App);
