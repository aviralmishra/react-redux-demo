import React from 'react';

import Dashboard from '../../src/components/dashboard/Dashboard';

import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import sampleData from '../../../sample-data.json';

Enzyme.configure({adapter: new Adapter()});

describe('Dashboard', () => {
  it('renders with test data', () => {
    const wrapper = shallow(<Dashboard/>);
    wrapper.setState({dashboard: sampleData});

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('EmployeesList').length).toBe(1);
  });
});
