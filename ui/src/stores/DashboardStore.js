import {EventEmitter} from 'events';

import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

class DashboardStore extends EventEmitter {
  _state = {
    dashboard: {
      companyInfo: {},
      employees: []
    }
  };

  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_DASHBOARD_DATA:
          this._state.dashboard = action.dashboardData;
          this.emit('change');
          break;
        default:
          break;
      }
    });
  }

  getState() {
    return this._state;
  }
}

export default new DashboardStore();
