// @flow
import React from 'react';

const Path = ({
  d,
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
}: {
  d: string,
  stroke?: string,
  strokeWidth?: number,
  strokeDasharray?: string,
  strokeDashoffset?: string,
  strokeLinecap?: string,
  strokeLinejoin?: string,
  strokeMiterlimit?: string,
  strokeOpacity?: number,
  fill?: string,
  fillOpacity?: number,
  opacity?: number,
  transform?: string,
  className?: string,
  style?: Object
}): React.Element<*> => (
  <Path
    d={d}
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

Path.defaultProps = {
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

export default Path;
