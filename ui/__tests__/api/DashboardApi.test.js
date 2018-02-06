import DashboardApi from '../../src/api/DashboardApi';

describe('DashboardApi', () => {
  it('provides dashboard data', () => {
    return DashboardApi.getDashboardData().then((data) => {
      expect(data.companyInfo).toBeDefined();
      expect(data.employees).toHaveLength(12);
    });
  });
});
