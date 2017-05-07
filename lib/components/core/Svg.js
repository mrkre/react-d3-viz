// @flow
import React from 'react';

const Svg = ({
  width,
  height,
  viewBox,
  children,
  className,
}: {
  width?: number,
  height?: number,
  viewBox?: string,
  children: React.Element<*>,
  className?: string
}): React.Element<*> => (
  <svg width={width} height={height} viewBox={viewBox} className={className}>{children}</svg>
);

Svg.defaultProps = {
  width: 800,
  height: 600,
  viewBox: '0 0 800 600',
  className: null,
};

export default Svg;
