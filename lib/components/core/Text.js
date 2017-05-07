// @flow
import React from 'react';

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
}: {
  text?: string,
  textAnchor?: string,
  x: number,
  y: number,
  dy?: string,
  fill?: string,
  fillOpacity?: number | string,
  opacity?: number | string,
  transform?: string,
  style?: Object
}): React.Element<*> => (
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
  >
    {text}
  </text>
);

Text.defaultProps = {
  text: null,
  textAnchor: null,
  dy: null,
  fill: null,
  fillOpacity: null,
  opacity: null,
  transform: null,
  style: null,
};

export default Text;
