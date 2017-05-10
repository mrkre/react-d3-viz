/* eslint-disable no-param-reassign */
import {
  scaleBand,
  scaleLinear,
  scalePoint,
  scaleOrdinal,
  scaleLog,
  scaleTime,
  scaleUtc,
} from 'd3-scale';

function extractScaleProps(props, fn) {
  const { domain, range, rangeRound, padding } = props;
  if (domain) fn.domain(domain);
  if (range) fn.range(range);
  if (rangeRound) fn.rangeRound(rangeRound);
  if (padding) fn.padding(padding);
  return fn;
}

function scaleType(type) {
  if (type === 'band') return scaleBand;
  if (type === 'linear') return scaleLinear;
  if (type === 'point') return scalePoint;
  if (type === 'ordinal') return scaleOrdinal;
  if (type === 'log') return scaleLog;
  if (type === 'time') return scaleTime;
  if (type === 'utc') return scaleUtc;
  throw new Error('Invalid scale type');
}

export default function scale(props) {
  return extractScaleProps(props, scaleType(props.type)());
}
