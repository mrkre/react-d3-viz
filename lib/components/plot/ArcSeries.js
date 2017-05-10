import React from 'react';
import { arc as arcD3, pie as pieD3 } from 'd3-shape';
import PropTypes from 'prop-types';
import AbstractSeries from './AbstractSeries';
import { Path } from '../core';
import colorScale from '../utils/colors';

export default class ArcSeries extends AbstractSeries {
  arcGenerator(row, fill, stroke, i) {
    const {
      outerRadius,
      innerRadius,
      onValueMouseOver,
      onValueMouseOut,
      onValueClick,
    } = this.props;

    const arc = arcD3().innerRadius(innerRadius).outerRadius(outerRadius);
    const props = {
      d: arc(row),
      fill,
      stroke,
      onMouseOver: onValueMouseOver,
      onMouseOut: onValueMouseOut,
      onClick: onValueClick,
    };
    return (<Path key={`arc-${i}`} {...props} />);
  }

  dataSort() {
    const { sort, valueAccessor, data } = this.props;
    if (data.length > 1) return sort || ((b, a) => valueAccessor(b) - valueAccessor(a));
    return null;
  }

  render() {
    const {
      data,
      fills,
      strokes,
      transform,
      onSeriesMouseOver,
      onSeriesMouseOut,
      valueAccessor,
    } = this.props;

    const arcs = pieD3().sort(this.dataSort()).value(valueAccessor)(data);
    const fillScale = colorScale(fills);
    const strokeScale = colorScale(strokes);
    return (
      <g
        onMouseOver={onSeriesMouseOver}
        onMouseOut={onSeriesMouseOut}
        transform={transform}
      >
        {arcs.map((d, i) => this.arcGenerator(d, fillScale(i), strokeScale(i), i))}
      </g>
    );
  }
}

ArcSeries.propTypes = {
  ...AbstractSeries.propTypes,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  valueAccessor: PropTypes.func,
  outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fills: PropTypes.func,
  strokes: PropTypes.func,
  transform: PropTypes.string,
  sort: PropTypes.func,
};

ArcSeries.defaultProps = {
  ...AbstractSeries.defaultProps,
  valueAccessor: d => d.value,
  outerRadius: 50,
  innerRadius: 0,
  fills: null,
  strokes: null,
  transform: null,
  sort: null,
};
