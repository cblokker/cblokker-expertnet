import React from 'react';
import PropTypes from 'prop-types';
import CompaniesContainer from './CompaniesContainer'


class CompaniesPage extends React.Component {
  state = {
    companies: this.props.companies,
    industries: [...new Set([''].concat(this.props.companies.map(value => value.industry)))],
    searchTerm: '',
    selectedIndustry: ''
  }

  updateSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  updateSelectedIndustry = (e) => {
    this.setState({selectedIndustry: e.target.value})
  }

  filterCompaniesByNameAndIndusty = () => {
    return this.state.companies.filter(company => {
      const nameFilter = company.name
        .trim()
        .toLowerCase()
        .includes(this.state.searchTerm.trim().toLowerCase())

      const IndustryFilter = company.industry
        .includes(this.state.selectedIndustry)

      return nameFilter && IndustryFilter
    })
  }

  render() {
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
            onChange={this.updateSearchTerm}
          />
          <select value={this.state.selectedIndustry}
                  onChange={this.updateSelectedIndustry}>
            {
              this.state.industries.map((industry) =>
                <option
                  key={industry.value}
                  value={industry.value}>
                  {industry}
                </option>
              )
            }
          </select>

          <div className='well'>
            <CompaniesContainer companies={this.filterCompaniesByNameAndIndusty()}/>
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
