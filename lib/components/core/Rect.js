import React from 'react';
import PropTypes from 'prop-types';

const Rect = ({
  x,
  y,
  width,
  height,
  rx,
  ry,
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
  opacity,
  transform,
  className,
  style,
}) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx={rx}
    ry={ry}
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
    opacity={opacity}
    transform={transform}
    className={className}
    style={style}
  />
);

Rect.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  rx: PropTypes.number,
  ry: PropTypes.number,
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
  style: PropTypes.object,
};

Rect.defaultProps = {
  rx: null,
  ry: null,
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
  style: null,
};

export default Rect;
