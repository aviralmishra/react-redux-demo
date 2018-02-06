import React from 'react';

import DataLoaderService from '../../services/DataLoaderService';
import DashboardStore from '../../stores/DashboardStore';

import EmployeesList from '../employees/EmployeesList';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
  }

  _getAppState = () => {
    return DashboardStore.getState();
  };

  componentDidMount() {
    DataLoaderService.loadDashboardData();
    DashboardStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    DashboardStore.removeListener('change', this.onChange);
  }

  onChange() {
    this.setState(this._getAppState());
  }

  render() {
    return (
      <div>
        <Header company={this.state.dashboard.companyInfo}/>
        <EmployeesList employees={this.state.dashboard.employees}/>
        <Footer/>
      </div>
    );
  }
}

export default Dashboard;
