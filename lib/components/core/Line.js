import React from 'react';
import PropTypes from 'prop-types';

const Line = ({
  x1,
  y1,
  x2,
  y2,
  fill,
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeDashoffset,
  strokeOpacity,
  className,
  transform,
  style,
}) => (
  <line
    x1={x1}
    x2={x2}
    y1={y1}
    y2={y2}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
    strokeDashoffset={strokeDashoffset}
    strokeOpacity={strokeOpacity}
    className={className}
    transform={transform}
    style={style}
  />
);

Line.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeDasharray: PropTypes.string,
  strokeDashoffset: PropTypes.string,
  strokeOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  transform: PropTypes.string,
  style: PropTypes.object,
};

Line.defaultProps = {
  fill: null,
  stroke: '#000000',
  strokeWidth: null,
  strokeDasharray: null,
  strokeDashoffset: null,
  strokeOpacity: null,
  className: null,
  transform: null,
  style: null,
};

export default Line;
