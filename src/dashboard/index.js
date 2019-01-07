import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import WeatherCard from '../card';
import { style } from './style';

class Dashboard extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      	<WeatherCard />
      </div>
    );
  }
}

export default withStyles(style)(Dashboard);
