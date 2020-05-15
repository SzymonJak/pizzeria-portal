import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoData = [
  {
    img: 'https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'BOOK A TABLE',
    author: 'author',
    cols: 4,
    text: '<h2>Orders</h2>',
  },
];

const TablesBookingNew = () => (
  <Container maxWidth='lg'>
    <Button variant='outlined' className={styles.buttonSubmit}>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Go Back</Link>
    </Button>
    <div className={styles.root}>
      {demoData.map((item, i) => (
        <GridList key={i} cellHeight={80} className={styles.gridList} cols={4}>
          <GridListTile key={i} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
            <GridListTileBar title={item.title}/>
          </GridListTile>
        </GridList>
      ))}
      <Paper elevation={2} className={styles.myBox}>

        <fieldset>
          <Typography>
            <label htmlFor='table'>Table No: </label>
            <input type='number' id='table' placeholder='1-11'></input>
          </Typography>
        </fieldset>
        <fieldset>
          <Typography>
            <label htmlFor='people'>People No: </label>
            <input type='number' id='people' placeholder='1-20'></input>
          </Typography>
        </fieldset>
        <fieldset>
          <Typography>
            <label htmlFor='time'>Time: </label>
            <input type='time' id='time' placeholder='12:00'></input>
          </Typography>
        </fieldset>
        <Button variant="outlined" className={styles.buttonSubmit}>
        Submit
        </Button>
      </Paper>
    </div>
  </Container>

);

export default TablesBookingNew;