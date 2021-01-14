import React, { Component} from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import videos from 'videos.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'Podcast Title',
            field: 'PodcastTitle',
            wrapText: true,
            resizable: true,
            checkboxSelection: true,
            filter: true,
            width: 650,
          },
        {
          headerName: 'Link',
          field: 'href',
          wrapText: true,
          resizable: true,
          hide: true,
          width: 150,
        },
        {
          headerName: 'Duration',
          field: 'Duration',
          wrapText: true,
          resizable: true,
          sortable: true,
          width: 100,
        },
        {
          headerName: 'Date',
          field: 'Date',
          wrapText: true,
          resizable: true,
          width: 75

        },
      ],
      rowData: [],
    };
  }

componentDidMount() {
  
    fetch('podcasts.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
    }
  
  

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataString = selectedData
      .map(node => `${node.make} ${node.model}`)
      .join(', ');
    alert(`Selected Nodes: ${selectedDataString}`);
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '700px',
          width: '1200px'
        }}
      >
    <button type="button" onClick={this.onButtonClick}>
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
