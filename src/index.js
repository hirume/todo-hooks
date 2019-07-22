import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const themeNight = createMuiTheme({
    palette: {

      primary: {
          main: '#9c27b0',
        },

      secondary: {
          main: '#c6ff00'
      },

      type: 'dark'

    }
    
  });
  

ReactDOM.render(
    <ThemeProvider theme={themeNight}>
<App />
</ThemeProvider>
, document.getElementById('root'));

