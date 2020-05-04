import React from 'react';
import styles from './Tables.module.scss';
// import { Link } from 'react-router-dom';

const TablesBookingNew = () => (
  <div className={styles.component}>
    <h3>New Booking</h3>
    <ul>
      <li><input type='text' placeholder='date'></input></li>
      <li><input type='text' placeholder='time'></input></li>
    </ul>
  </div>
);

export default TablesBookingNew;