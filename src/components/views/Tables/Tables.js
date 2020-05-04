import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
  </div>
);

export default Tables;