// @flow
import React from 'react';

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
}: {
  x: number,
  y: number,
  width: number,
  height: number,
  rx?: number,
  ry?: number,
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
