import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './index.css';
import Dashboard from './dashboard';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme();

const DashboardWithTheme = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Dashboard />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<DashboardWithTheme />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
