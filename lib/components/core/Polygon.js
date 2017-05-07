// @flow
import React from 'react';

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
}: {
  points: string,
  stroke?: string,
  strokeWidth?: number | string,
  strokeDasharray?: string,
  strokeDashoffset?: string,
  strokeLinecap?: string,
  strokeLinejoin?: string,
  strokeMiterlimit?: string,
  strokeOpacity?: number | string,
  fill?: string,
  fillOpacity?: number | string,
  opacity?: number | string,
  transform?: string,
  className?: string,
  clipPath?: string,
  style?: Object
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
