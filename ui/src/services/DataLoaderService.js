import ServerActions from '../actions/ServerActions';
import DashboardApi from '../api/DashboardApi';

const DataLoaderService = {
  async loadDashboardData() {
    let sampleData = await DashboardApi.getDashboardData();
    ServerActions.receiveDashboardData(sampleData);
  }
};

export default DataLoaderService;
