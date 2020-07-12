import React from 'react';
import PropTypes from 'prop-types';
import Company from './Company'


class CompaniesContainer extends React.Component {
	render() {
		return (
			<div class='row'>
			  <div class='col-md-6'>
			    {this.props.companies.map(company => <Company company={company}/>)}
			  </div>
			</div>
		)
	}
}

export default CompaniesContainer;
