import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

const ServerActions = {
  receiveDashboardData(dashboardData) {
    AppDispatcher.dispatch(
      {actionType: ActionTypes.RECEIVE_DASHBOARD_DATA, dashboardData}
    );
  }
};

export default ServerActions;
