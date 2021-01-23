import React, { Component} from 'react';
// import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { withRouter} from 'react-router-dom'
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'VideoTitle',
            field: 'VideoTitle',
            wrapText: true,
            resizable: true,
            checkboxSelection: true,
            sortable: true,
            filter: true,
            filterParams: {
              filterOptions: ['contains'],
            },
            width: 650,
          },
        {
          headerName: 'Link',
          field: 'VideoHref',
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
          // sortable: true,
          width: 75
        },
        {
          headerName: 'Modality',
          field: 'Modality',
          wrapText: true,
          resizable: true,
          sortable: true,
          filter: true,
          filterParams: {
            filterOptions: ['contains'],
          },
          width: 120

        },
      ],
      rowData: [],

      rowHeight: 40,
    };
  }

componentDidMount() {

  if (!sessionStorage.loginStatus){
    alert("please log in !")
    this.props.history.push('/login')
  }
   
    fetch('videos.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
    }
  
  

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data.VideoHref);
    window.open(`${selectedData}`,'popup','width=600,height=600,scrollbars=no,resizable=no');
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '700px',
          width: '1000px'
        }}
      >
   <div className="mb-2">
    <Button className="ex btn-circle" onClick={this.onButtonClick}>
                                  Play Selected Video
        </Button>
        </div>





        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
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
