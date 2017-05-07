// @flow
import React from 'react';

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
}: {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  fill?: string,
  stroke?: string,
  strokeWidth?: number | string,
  strokeDasharray?: string,
  strokeDashoffset?: string,
  strokeOpacity?: number | string,
  className?: string,
  transform?: string,
  style?: Object
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
