import React, { Component } from 'react';
import './style.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Picker from '../Picker'
import { getWeek } from 'date-fns'
// import API from '../../utils/API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearWeek: '',
      gridData: '',
      columnDefs: [
        {
          headerName: 'Day',
          field: 'day',
          wrapText: true,
          resizable: true,
          // checkboxSelection: true,
          width: 130,

          },
        {
          headerName: 'BP Systolic',
          field: 'bpSystolic',
          wrapText: true,
          resizable: true,
          editable: true,
          width: 100,
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

    .catch((error)=>{
      fetch('health.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }})
        .then(result => result.json())
        .then(rowData => this.setState({ rowData }))

    })
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

updateWeek = (gridData) =>{

  console.log(gridData)
  fetch('/api/health/' + this.state.yearWeek, {
    headers : {'Content-Type': 'application/json', 'Accept': 'application/json'},
    method: 'PUT',
    body: gridData})
    .then(result => result.json())
    .catch((error)=>{
      console.log(error)
      this.getData()
})}

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


  onButtonClick = () => {
    this.gridApi.selectAll();
    const selectedNodes = this.gridApi.getSelectedNodes();
    console.log(selectedNodes)
    const selectedData = selectedNodes.map(node => node.data);
    console.log(selectedData);
      localStorage.setItem('data', JSON.stringify(selectedData))

    let gridSave = `[{"yearWeek": "${this.state.yearWeek}", "userID": "Bob", "healthData": ${JSON.stringify(selectedData)}}]`;
    console.log(gridSave);
    this.setState({gridData: gridSave})
    this.saveWeek(gridSave)
    const selectedDataString = selectedData
    .map(node => `yearWeek: ${this.state.yearWeek} Day: ${node.day}, bpSystolic: ${node.bpSystolic}, bpDiastolic: ${node.bpDiastolic}, Weight: ${node.weight}, sugarAM: ${node.sugarAM}, sugarPM: ${node.sugarPM}, Sleep: ${node.sleep}, Notes: ${node.notes}`)
      .join(', ');
    ;
  };

    onUpdateButtonClick = () => {
    this.gridApi.selectAll();
    const selectedUpdateNodes = this.gridApi.getSelectedNodes();
    console.log(selectedUpdateNodes)
    const selectedUpdateData = selectedUpdateNodes.map(node => node.data);
    console.log(selectedUpdateData);
    let gridSave = `[{"yearWeek": "${this.state.yearWeek}", "healthData": ${JSON.stringify(selectedUpdateData)}}]`;
    console.log(gridSave);

    this.setState({gridData: gridSave})

    this.updateWeek(gridSave)
    const selectedDataString = selectedUpdateData
    .map(node => `yearWeek: ${this.state.yearWeek} Day: ${node.day}, bpSystolic: ${node.bpSystolic}, bpDiastolic: ${node.bpDiastolic}, Weight: ${node.weight}, sugarAM: ${node.sugarAM}, sugarPM: ${node.sugarPM}, Sleep: ${node.sleep}, Notes: ${node.notes}`)
      .join(', ');
    ;
  };


pickerHandler= (date)=> {
  console.log(date)
  let pickedDate = new Date(date).toJSON().substring(0, 4) + "-" + getWeek(date)
  console.log(pickedDate)

   this.setState({yearWeek: pickedDate},  this.getData)
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
<Picker action={this.pickerHandler}></Picker>

    <button type="button" class="btn-info" onClick={this.onButtonClick}>
        Save Your Week
    </button>

    <button type="button" class="btn-warning" onClick={this.onUpdateButtonClick}>
        Update this Week
    </button>

    <button type="button" class="btn-danger" onClick={this.eraseWeek}>
        Erase this Week 
    </button>

    <button type="button" class="btn-dark" onClick={this.updateWeek}>
        Clear the Grid
    </button>

        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          animateRows={this.state.animateRows}
          rowHeight={this.state.rowHeight}
        ></AgGridReact>
      </div>
    );
  }
}

export default App;
