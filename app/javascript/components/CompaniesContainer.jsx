import React from 'react';
import PropTypes from 'prop-types';
import Company from './Company'


class CompaniesContainer extends React.Component {
  render() {
    return (
      <div className='row'>
        {
          this.props.companies.map(company => {
            return <Company company={company}/>
          })
        }
      </div>
    )
  } 
}

export default CompaniesContainer;


