import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const TablesEvents = () => {

  return (
    <div className={styles.component}>
      <h2>Tables - Booking</h2>
      <Typography>
        <Button>
          <Link to={`${process.env.PUBLIC_URL}/tables/events/testEvent323`}>Events - ID</Link>
        </Button>
        <Button>
          <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Events - NEW</Link>
        </Button>
      </Typography>
    </div>
  );
};

export default TablesEvents;

