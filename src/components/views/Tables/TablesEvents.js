import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const TablesEvents = () => {

  return (
    <div className={styles.component}>
      <h2>Tables - Events</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/testEvent323`}>Events - ID</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Events - NEW</Link>
    </div>
  );
};

export default TablesEvents;