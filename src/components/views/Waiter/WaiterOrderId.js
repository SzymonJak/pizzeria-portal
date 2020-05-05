import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Waiter.module.scss';

const WaiterOrderId = ({ match }) => (
  <div>
    <h3>Waiter EXISTING order with ID</h3>
    <h4>ID: {match.params.id}</h4>
  </div>
);

WaiterOrderId.propTypes = {
  match: PropTypes.object,
};

export default WaiterOrderId;