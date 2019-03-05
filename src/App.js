import React, { useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function App(props) {
  const [name, setName] = useState('Sohad');

  function handleNameChange(e) {
    setName(e.target.value);
  }

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
          id="outlined-name"
          label="Name"
          style={{
            marginLeft: 30,
            marginRight: 30
          }}
          value={name}
          onChange={handleNameChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    </div>
  );
}
