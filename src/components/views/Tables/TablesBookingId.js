import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';


const TablesBookingId = ({ match }) => (
  <div className={styles.component}>
    <h3>Existing booking with ID: {match.params.id}</h3>
    <ul>
      <li>Name</li>
      <li>Date</li>
    </ul>
  </div>
);

TablesBookingId.propTypes = {
  match: PropTypes.object,
};

export default TablesBookingId;