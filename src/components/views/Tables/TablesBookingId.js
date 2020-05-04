import React from 'react';
import styles from './Tables.module.scss';


const TablesBookingId = () => (
  <div className={styles.component}>
    <h3>Existing booking with ID</h3>
    <ul>
      <li>Name</li>
      <li>Date</li>
    </ul>
  </div>
);

export default TablesBookingId;