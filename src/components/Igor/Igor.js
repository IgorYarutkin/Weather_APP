import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Igor extends Component {
  render() {
    const { helloString } = this.props;
    return (
      <h2 className="Igor">
        {helloString}, Игорь!
      </h2>
    );
  }
}

Igor.propTypes = {
    helloString: PropTypes.string
}

export default Igor;
