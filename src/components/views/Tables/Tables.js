import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Scheduler from '../../features/Scheduler/Scheduler';
import Container from '@material-ui/core/Container';

const Tables = () => (
  <div className={styles.component}>
    <Container maxWidth='lg'>
      
      <Typography variant='h4' component='h2' gutterBottom>
        Tables view
      </Typography>
      <Button variant='outlined' className={styles.buttonSubmit}>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
      </Button>
      <Button variant='outlined' className={styles.buttonSubmit}>
        <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
      </Button>
      <Scheduler />
    </Container>
  </div>
);

export default Tables;