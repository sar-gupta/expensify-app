import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render single expense summary correctly', () => {
  const expenses = {
    expenseCount: 1,
    expensesTotal: 250
  };
  const wrapper = shallow(<ExpenseSummary {...expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses summary correctly', () => {
  const expenses = {
    expenseCount: 2,
    expensesTotal: 2500
  };
  const wrapper = shallow(<ExpenseSummary {...expenses}/>);
  expect(wrapper).toMatchSnapshot();
});