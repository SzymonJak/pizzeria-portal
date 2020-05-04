import React from 'react';
import styles from './Tables.module.scss';
// import { Link } from 'react-router-dom';

const TablesEventsNew = () => (
  <div className={styles.component}>
    <h3>New Event</h3>
    <ul>
      <li><input type='text' placeholder='date'></input></li>
      <li><input type='text' placeholder='time'></input></li>
    </ul>
  </div>
);

export default TablesEventsNew;