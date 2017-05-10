import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
  text,
  textAnchor,
  x,
  y,
  dy,
  fill,
  fillOpacity,
  opacity,
  transform,
  style,
  onMouseOver,
  onMouseOut,
}) => (
  <text
    textAnchor={textAnchor}
    x={x}
    y={y}
    dy={dy}
    fill={fill}
    fillOpacity={fillOpacity}
    opacity={opacity}
    transform={transform}
    style={style}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    {text}
  </text>
);

Text.propTypes = {
  text: PropTypes.string,
  textAnchor: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  dy: PropTypes.string,
  fill: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  transform: PropTypes.string,
  style: PropTypes.object,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

Text.defaultProps = {
  text: null,
  textAnchor: null,
  dy: null,
  fill: null,
  fillOpacity: null,
  opacity: null,
  transform: null,
  style: null,
  onMouseOver: () => {},
  onMouseOut: () => {},
};

export default Text;
