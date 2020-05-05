import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const TablesBooking = () => (
  <div className={styles.component}>
    <h2>Tables - Booking</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/testBooking876`}>Booking - ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Booking - NEW</Link>
  </div>
);

export default TablesBooking;