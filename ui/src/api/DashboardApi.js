import sampleData from '../../../sample-data.json';

const DashboardApi = {
  async getDashboardData() {
    return new Promise((resolve, reject) => {
      if (!sampleData.companyInfo || !sampleData.employees) {
        reject('Required dashboard data is not available.');
      }
      resolve(sampleData);
    });
  }
};

export default DashboardApi;
