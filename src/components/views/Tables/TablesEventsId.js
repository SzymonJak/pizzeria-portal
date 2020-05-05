import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const TablesEventsId = ({ match }) => (
  <div className={styles.component}>
    <h3>Existing event with ID: {match.params.id}</h3>
    <ul>
      <li>Name</li>
      <li>Date</li>
    </ul>
  </div>
);

TablesEventsId.propTypes = {
  match: PropTypes.object,
};

export default TablesEventsId;