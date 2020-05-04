import React from 'react';
import styles from './Tables.module.scss';
// import { Link } from 'react-router-dom';

const TablesEventsId = () => (
  <div className={styles.component}>
    <h3>Existing event with ID</h3>
    <ul>
      <li>Name</li>
      <li>Date</li>
    </ul>
  </div>
);

export default TablesEventsId;