import React from 'react'
import './Background.css'
import PropTypes from 'prop-types';

// Provides the app-wide background treatment while keeping page content composable.
function Background({ children }) {
  return (
    <div className="background">
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
