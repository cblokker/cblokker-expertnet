import React from 'react';
import PropTypes from 'prop-types';

class Comapny extends React.Component {
  render() {
    return (
      <div class='card'>
        <img src={this.props.company.full_photo_asset_path} class='card-img-top'/>
        <div class='card-body'>
          <h5 class='card-title'>{this.props.company.name}</h5>
          <p class='card-text'>{this.props.company.description}</p>
          <p>{this.props.company.industry}</p>
        </div>
      </div>
    )
  }
}

export default Comapny;
