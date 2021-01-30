import React from 'react';
import PropTypes from 'prop-types';

import './TransactionSwipeContent.css';

const TransactionSwipeConent = ({ icon, label, position }) => (
  <div className={`complex-swipeable-list__item-content-${position}`}>
    <div className="complex-swipeable-list__content">
      <span className="complex-swipeable-list__icon">{icon}</span>
      {label && <span>{label}</span>}
    </div>
  </div>
);

TransactionSwipeConent.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']).isRequired
};

export default TransactionSwipeConent;
