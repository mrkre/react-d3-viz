import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  width,
  height,
  viewBox,
  children,
  className,
}) => (
  <svg width={width} height={height} viewBox={viewBox} className={className}>{children}</svg>
);

Svg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

Svg.defaultProps = {
  width: 800,
  height: 600,
  viewBox: '0 0 800 600',
  children: null,
  className: null,
};

export default Svg;
