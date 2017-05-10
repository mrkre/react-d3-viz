import React from 'react';
import PropTypes from 'prop-types';
import AbstractSeries from './AbstractSeries';
import { Rect } from '../core';
import { arrayUtils, scale, colors } from '../utils';

export default class BarSeries extends AbstractSeries {
  render() {
    const {
      data,
      width,
      height,
      fills,
      strokes,
      xScaleType,
      yScaleType,
      xAccessor,
      yAccessor,
      onSeriesMouseOver,
      onSeriesMouseOut,
      onSeriesClick,
      onValueMouseOver,
      onValueMouseOut,
      onValueClick,
      transform,
    } = this.props;

    const fillScale = colors(fills);
    const strokeScale = colors(strokes);

    const xScaleProps = {
      type: xScaleType,
      domain: data.map(xAccessor),
      rangeRound: [0, width],
      padding: 0.1,
    };

    const xScale = scale(xScaleProps);

    const yScaleProps = {
      type: yScaleType,
      domain: arrayUtils.domain(data, yAccessor, false),
      rangeRound: [height, 0],
    };

    const yScale = scale(yScaleProps);

    return (
      <g
        onMouseOver={onSeriesMouseOver}
        onMouseOut={onSeriesMouseOut}
        onClick={onSeriesClick}
        transform={transform}
      >
        { data.map((d, i) => (
          <Rect
            x={xScale(xAccessor(d))}
            y={yScale(yAccessor(d))}
            fill={fillScale(i)}
            stroke={strokeScale(i)}
            width={xScale.bandwidth()}
            height={height - yScale(yAccessor(d))}
            onMouseOver={e => onValueMouseOver(d, e)}
            onMouseOut={e => onValueMouseOut(d, e)}
            onClick={e => onValueClick(d, e)}
          />
        ))}
      </g>
    );
  }
}

BarSeries.propTypes = {
  ...AbstractSeries.propTypes,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xAccessor: PropTypes.func,
  yAccessor: PropTypes.func,
  xScaleType: PropTypes.string,
  yScaleType: PropTypes.string,
  fills: PropTypes.arrayOf(PropTypes.string),
  strokes: PropTypes.arrayOf(PropTypes.string),
  transform: PropTypes.string,
};

BarSeries.defaultProps = {
  ...AbstractSeries.defaultProps,
  width: 400,
  height: 400,
  xAccessor: d => d.x,
  yAccessor: d => d.y,
  xScaleType: 'band',
  yScaleType: 'linear',
  fills: null,
  strokes: null,
  transform: null,
};
