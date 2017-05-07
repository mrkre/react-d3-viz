// @flow
import React from 'react';

type StopType = {
  id: string | number,
  className?: string,
  color: string,
  offset?: string,
  opacity?: number
};

const LinearGradient = ({
  id,
  stops,
  x1,
  y1,
  x2,
  y2,
}: {
  id: string,
  stops: Array<StopType>,
  x1?: number,
  y1?: number,
  x2?: number,
  y2?: number
}) => (
  <linearGradient id={id} x1={x1} x2={x2} y1={y1} y2={y2}>
    {stops.map((stop: StopType) => (
      <stop
        key={stop.id}
        className={stop.className}
        offset={stop.offset}
        stopColor={stop.color}
        stopOpacity={stop.opacity}
      />
    ))}
  </linearGradient>
);

LinearGradient.defaultProps = {
  stopClassName: null,
  x1: null,
  y1: null,
  x2: null,
  y2: null,
};

export default LinearGradient;
