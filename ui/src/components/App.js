import React from 'react';

import Dashboard from './dashboard/Dashboard';
import '../assets/images/favicon.ico';
import './app.css';

class App extends React.Component {
  render() {
    return (<div>
      <Dashboard/>
    </div>);
  }
}

export default App;
