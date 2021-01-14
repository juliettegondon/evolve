import React, { Component } from 'react';
import './style.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'Day',
          field: 'day',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          checkboxSelection: true,
          },
        {
          headerName: 'BP Systolic',
          field: 'bpSystolic',
          wrapText: true,
          autoHeight: true,
          resizable: true,
        },
        {
          headerName: 'BP Diastolic',
          field: 'bpDiastolic',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          editable: true,
        },
        {
          headerName: 'Weight',
          field: 'weight',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          editable: true,
        },
        {
          headerName: 'Sugar AM',
          field: 'sugarAM',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          editable: true,
        },
        {
          headerName: 'Sugar PM',
          field: 'sugarPM',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          editable: true,
        },
        {
          headerName: 'Sleep hrs',
          field: 'sleep',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          editable: true,
        },
        {
          headerName: 'Notes',
          field: 'notes',
          wrapText: true,
          autoHeight: true,
          resizable: true,
          editable: true,
        }
      ],
      rowData: [
        {   "day": "Monday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor",
        },
        {   "day": "Tuesday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat.",
        },
        {   "day": "Wednesday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus",
        },
        {   "day": "Thursday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo,",
        },
        {   "day": "Friday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor",
        },
        {   "day": "Saturday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna",
        },
        {   "day": "Sunday", 
            "bpSystolic": "120",
            "bpDiastolic": "85",
            "weight": "225",
            "sugarAM": "120",
            "sugarPM": "130",
            "sleep": "7",
            "notes": "Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia",
        },
    ],
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }));
  }

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataString = selectedData
      .map(node => `${node.make} ${node.model}`)
      .join(', ');
    alert(`Selected Nodes: ${selectedDataString}`);
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '700px',
          width: '1200px'
        }}
      >
    <button type="button" class="btn-info" onClick={this.onButtonClick}>
        Selected Rows
    </button>


        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}

export default App;
