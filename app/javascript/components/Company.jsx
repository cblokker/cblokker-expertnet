import React from 'react';
import PropTypes from 'prop-types';


class Comapny extends React.Component {
  render() {
    return (
      <div className='col-md-12'>
        <div className='card card-companies'>
          <div className='card-horizontal'>
            <div className="img-square-wrapper">
              <img src={this.props.company.full_photo_asset_path} className='thumb-img'/>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{this.props.company.name}</h5>
              <p className='card-text'>{this.props.company.description}</p>
              <p>{this.props.company.industry}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comapny;
