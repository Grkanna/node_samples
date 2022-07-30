import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Details from './Details';

class Dashboard extends Component {
    render() {
        return(
            <Details />
        )
    }
}

export default Dashboard;