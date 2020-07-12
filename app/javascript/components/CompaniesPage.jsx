import React from 'react';
import PropTypes from 'prop-types';

import CompaniesContainer from './CompaniesContainer'


class CompaniesPage extends React.Component {
  state = {
    companies: this.props.companies,
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.companies.filter(company => company.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    // NOTE: `this.props.companies` holds all company data necessary
    // for completing this portion of the assignment.
    const prettyPrintCompanies = JSON.stringify(this.props.companies, null, 2);

    return (
      <div className='companies-index'>
        <div className='container'>
          <div className='jumbotron text-center'>
            <h1 className='title'>First Round Companies</h1>
            <a href='/' className='btn btn-primary'>Return Home</a>
          </div>
          <input
            type='text'
            placeholder='Search for companies by title...'
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
          />
          <select>
            <option value='' disabled selected>Filter by industry...</option>
          </select>

          <div className='well'>
            <CompaniesContainer companies={this.dynamicSearch()}/>
          </div>
        </div>
      </div>
    );
  }
}

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default CompaniesPage;
