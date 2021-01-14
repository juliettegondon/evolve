import React, { Component} from 'react';
// import './App.css';
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
            sortable: true,
            filterParams: {
              filterOptions: ['contains'],
            },
            width: 550,
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
          sortable: true,
          width: 150

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
      const selectedData = selectedNodes.map(node => node.data.href);
      window.open(`${selectedData}`,'popup','width=600,height=600,scrollbars=no,resizable=no');
    }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '700px',
          width: '900px'
        }}
      >
    <button type="button" class="btn-info" onClick={this.onButtonClick}>
        Play Selected Podcast
    </button>


        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
          rowSelection="single"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}

export default App;
