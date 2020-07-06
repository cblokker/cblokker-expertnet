import React from 'react';
import PropTypes from 'prop-types';

class CompaniesPage extends React.Component {
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
          />
          <select>
            <option value='' disabled selected>Filter by industry...</option>
          </select>

          <div className='well'>
            <pre>
              {prettyPrintCompanies}
            </pre>
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
