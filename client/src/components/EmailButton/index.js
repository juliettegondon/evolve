import React, { Component } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';





class EmailButton extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
 onClick(){
        window.location.href = `mailto:email@example.com?&subject=Health Data from E-Volve&body=Future Developments will allow users to upload data directly to their physician's online health portal!`;
    }
    render(){
        return <ButtonGroup size="sm" className="mb-2">
        <Button className="ex btn-circle" onClick={this.onClick}>
                                  Export Medical Records
        </Button>
        </ButtonGroup>;
    }
}

export default EmailButton;