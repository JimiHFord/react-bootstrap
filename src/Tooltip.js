import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from './BootstrapMixin';
import CustomPropTypes from './utils/CustomPropTypes';

const Tooltip = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: CustomPropTypes.isRequiredForA11y(
      React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ])
    ),

    /**
     * Sets the direction the Tooltip is positioned towards.
     */
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The "left" position value for the Tooltip.
     */
    positionLeft: React.PropTypes.number,
    /**
     * The "top" position value for the Tooltip.
     */
    positionTop: React.PropTypes.number,
    /**
     * The "left" position value for the Tooltip arrow.
     */
    arrowOffsetLeft: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    /**
     * The "top" position value for the Tooltip arrow.
     */
    arrowOffsetTop: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    /**
     * Title text
     */
    title: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      placement: 'right'
    };
  },

  render() {
    const classes = {
      'tooltip': true,
      [this.props.placement]: true
    };

    const style = {
      'left': this.props.positionLeft,
      'top': this.props.positionTop,
      ...this.props.style
    };

    const arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return (
        <div role="tooltip" {...this.props} className={classNames(this.props.className, classes)} style={style}>
          <div className="tooltip-arrow" style={arrowStyle} />
          <div className="tooltip-inner">
            {this.props.children}
          </div>
        </div>
      );
  }
});

export default Tooltip;
