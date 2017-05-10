import React from 'react';
import PropTypes from 'prop-types';

export default class AbstractSeries extends React.Component {
  seriesMouseOverHandler(e: MouseEvent) {
    const { onSeriesMouseOver } = this.props;
    if (onSeriesMouseOver) onSeriesMouseOver(e);
  }

  seriesMouseOutHandler(e: MouseEvent) {
    const { onSeriesMouseOut } = this.props;
    if (onSeriesMouseOut) onSeriesMouseOut(e);
  }

  seriesClickHandler(e: MouseEvent) {
    const { onSeriesClick } = this.props;
    if (onSeriesClick) onSeriesClick(e);
  }

  valueMouseOverHandler(d: Object, e: MouseEvent) {
    const { onValueMouseOver } = this.props;
    if (onValueMouseOver) onValueMouseOver(d, e);
  }

  valueMouseOutHandler(d: Object, e: MouseEvent) {
    const { onValueMouseOut } = this.props;
    if (onValueMouseOut) onValueMouseOut(d, e);
  }

  valueClickHandler(d: Object, e: MouseEvent) {
    const { onValueClick } = this.props;
    if (onValueClick) onValueClick(d, e);
  }
}

AbstractSeries.propTypes = {
  onSeriesMouseOver: PropTypes.func,
  onSeriesMouseOut: PropTypes.func,
  onSeriesClick: PropTypes.func,
  onValueMouseOver: PropTypes.func,
  onValueMouseOut: PropTypes.func,
  onValueClick: PropTypes.func,
};

AbstractSeries.defaultProps = {
  onSeriesMouseOver: () => {},
  onSeriesMouseOut: () => {},
  onSeriesClick: () => {},
  onValueMouseOver: () => {},
  onValueMouseOut: () => {},
  onValueClick: () => {},
};
