import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sohad',
      surename: 'Dader'
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurenameChange = this.handleSurenameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSurenameChange(e) {
    this.setState({
      surename: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          style={{ backgroundColor: 'rgb(109, 30, 124)', color: 'white' }}
          position="static"
          color="default"
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Hooks with Reactjs
            </Typography>
          </Toolbar>
        </AppBar>
        <form
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'rgba(230, 205, 235, 0.56)'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Name"
            style={{
              marginLeft: 30,
              marginRight: 30
            }}
            value={this.state.name}
            onChange={this.handleNameChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Sure Name"
            style={{
              marginLeft: 30,
              marginRight: 30
            }}
            value={this.state.surename}
            onChange={this.handleSurenameChange}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
    );
  }
}
