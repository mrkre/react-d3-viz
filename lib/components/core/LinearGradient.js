import React from 'react';
import PropTypes from 'prop-types';

const LinearGradient = ({
  id,
  stops,
  x1,
  y1,
  x2,
  y2,
}) => (
  <linearGradient id={id} x1={x1} x2={x2} y1={y1} y2={y2}>
    {stops.map((stop) => (
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

LinearGradient.propTypes = {
  id: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    className: PropTypes.string.isRequired,
    offset: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  })).isRequired,
  x1: PropTypes.number,
  y1: PropTypes.number,
  x2: PropTypes.number,
  y2: PropTypes.number,
};

LinearGradient.defaultProps = {
  x1: null,
  y1: null,
  x2: null,
  y2: null,
};

export default LinearGradient;
