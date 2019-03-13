import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

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

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surename;
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surename;
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
      <div className="App" style={{ backgroundColor: '#E9D7EE' }}>
        <AppBar
          style={{
            flex: 1,
            backgroundColor: 'rgb(109, 30, 124)',
            color: 'white'
          }}
          position="static"
          color="default"
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              style={{
                flex: 1,
                justifyContent: 'center',
                height: '100%'
              }}
            >
              Hooks with Reactjs
            </Typography>
          </Toolbar>
        </AppBar>
        <form noValidate autoComplete="off">
          <TextField
            label="Name"
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
        <div
          style={{
            flex: 1,
            width: '40%',
            marginLeft: '28%',
            height: 300
          }}
        >
          <br />
          <Paper>
            <Typography variant="h7" component="h3">
              Your full name that you insert it :
            </Typography>
            <Typography variant="h3" style={{ color: '#6C237A' }}>
              {this.state.name} {this.state.surename}
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}
