import React, { Component } from 'react';
import './style.css';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'react-bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class ExerciseGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
          headerName: 'Activity',
          field: 'activity',
          wrapText: true,
          // autoHeight: true,
          resizable: true,
          width: 120,
          // columnCentered: true,
        },
        {
          headerName: 'Duration',
          field: 'duration',
          wrapText: true,
          // autoHeight: true,
          resizable: true,
          editable: true,
          width: 100,
        },
        {
          headerName: 'Intensity',
          field: 'intensity',
          wrapText: true,
          // autoHeight: true,
          resizable: true,
          editable: true,
          width: 100,
        },
        {
            headerName: 'Mood',
            field: 'mood',
            wrapText: true,
            // autoHeight: true,
            resizable: true,
            editable: true,
            width: 100,
          },
          {
            headerName: 'Notes',
            field: 'notes',
            wrapText: true,
            // autoHeight: true,
            resizable: true,
            editable: true,
            width: 600,
          }
      ],

      rowData: [
        {   "day": "Monday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor",
        },
        {   "day": "Tuesday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat.",
        },
        {   "day": "Wednesday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus",
        },
        {   "day": "Thursday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo,",
        },
        {   "day": "Friday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor",
        },
        {   "day": "Saturday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna",
        },
        {   "day": "Sunday", 
            "activity": "Running",
            "duration": 50,
            "intensity": "High",
            "mood": "Up",
            "notes": "Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia",
        },
    ],

  rowHeight: 60,
  animateRows: true,

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
      .map(node => `day: ${node.day}, activity: ${node.activity}, Duration: ${node.duration}, Intensity: ${node.intensity}, Mood: ${node.mood}, Notes: ${node.notes}`)
      .join(', ');
    alert(`Selected Nodes: ${selectedDataString}`);
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '1200px'
        }}
      >
<div className="mb-2">
<Button onClick={this.openButtonClick}>
            Save Selected Rows
          </Button>
          </div>

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

export default ExerciseGrid;
