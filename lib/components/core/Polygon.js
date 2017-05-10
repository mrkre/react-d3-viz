import React from 'react';
import PropTypes from 'prop-types';

const Polygon = ({
  points,
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeDashoffset,
  strokeLinecap,
  strokeLinejoin,
  strokeMiterlimit,
  strokeOpacity,
  fill,
  fillOpacity,
  transform,
  clipPath,
  style,
}) => (
  <polygon
    points={points}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
    strokeDashoffset={strokeDashoffset}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeMiterlimit={strokeMiterlimit}
    strokeOpacity={strokeOpacity}
    fill={fill}
    fillOpacity={fillOpacity}
    style={style}
    transform={transform}
    clipPath={clipPath}
  />
);

Polygon.propTypes = {
  points: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeDasharray: PropTypes.string,
  strokeDashoffset: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  strokeMiterlimit: PropTypes.string,
  strokeOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  transform: PropTypes.string,
  className: PropTypes.string,
  clipPath: PropTypes.string,
  style: PropTypes.object,
};

Polygon.defaultProps = {
  stroke: null,
  strokeWidth: null,
  strokeDasharray: null,
  strokeDashoffset: null,
  strokeLinecap: null,
  strokeLinejoin: null,
  strokeMiterlimit: null,
  strokeOpacity: null,
  fill: null,
  fillOpacity: null,
  opacity: null,
  transform: null,
  className: null,
  clipPath: null,
  style: null,
};

export default Polygon;
