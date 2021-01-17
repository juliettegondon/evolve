import React, { Component } from 'react';
import './style.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Picker from '../Picker'
import { getWeek } from 'date-fns'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearWeek: '',
      columnDefs: [
        {
          headerName: 'Day',
          field: 'day',
          wrapText: true,
          resizable: true,
          checkboxSelection: true,
          width: 130,

          },
        {
          headerName: 'BP Systolic',
          field: 'bpSystolic',
          wrapText: true,
          resizable: true,
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
  

this.getData()


fetch('health.json', {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }})
  .then(result => result.json())
  .then(rowData => this.setState({ rowData }))

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


  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    console.log(selectedNodes)
    const selectedData = selectedNodes.map(node => node.data);
    console.log(selectedData)
    const selectedDataString = selectedData
    .map(node => `Day: ${node.day}, bpSystolic: ${node.bpSystolic}, bpDiastolic: ${node.bpDiastolic}, Weight: ${node.weight}, sugarAM: ${node.sugarAM}, sugarPM: ${node.sugarPM}, Sleep: ${node.sleep}, Notes: ${node.notes}`)
      .join(', ');
    alert(`Selected Info to Save: ${selectedDataString}`);
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
        Save Selected Days
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
