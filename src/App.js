import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export default function App(props) {
  const [name, setName] = useState('Sohad');
  const [surname, setSurename] = useState('Dader');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurenameChange(e) {
    setSurename(e.target.value);
  }

  useEffect(() => {
    document.title = name + ' ' + surname;
  });

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
          value={name}
          onChange={handleNameChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Sure Name"
          style={{
            marginLeft: 30,
            marginRight: 30
          }}
          value={surname}
          onChange={handleSurenameChange}
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
            {name} {surname}
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
