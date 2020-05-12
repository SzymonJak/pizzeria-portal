import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const TablesBooking = () => (
  <div className={styles.component}>
    <h2>Tables - Booking</h2>
    <Typography>
      <Button>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/testBooking876`}>Booking - ID</Link>
      </Button>
      <Button>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Booking - NEW</Link>
      </Button>
    </Typography>
  </div>
);

export default TablesBooking;