// setup file
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CompaniesPage from 'components/CompaniesPage';

configure({ adapter: new Adapter() });

describe(`CompaniesPage`, () => {
  test(`displays a header`, () => {
    const companies = [{

    }];
    const renderedCompaniesPage = shallow(<CompaniesPage companies={companies}/>);
    expect(renderedCompaniesPage.text()).toContain('First Round Companies');
  });
})
