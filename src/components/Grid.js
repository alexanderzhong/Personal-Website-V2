import React, { Component } from 'react';
import './Grid.css';
// import Portfolio from './Portfolio';
import PortfolioElement from './PortfolioElement';
import PropTypes from 'prop-types';

class Grid extends Component {
  render () {
      const items = this.props.elements.map((ele) => (
          <div>
            <PortfolioElement key={ele.id} info={ele} onClick={() => this.props.onSelect(ele.id)}/>
          </div>
      ));
      return (<div className='grid'>
        {items}
      </div>)
    }
}

// PropTypes
Grid.propTypes = {
    elements: PropTypes.array.isRequired
}

export default Grid;
