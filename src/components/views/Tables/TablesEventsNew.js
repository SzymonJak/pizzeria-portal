import React from 'react';
import styles from './Tables.module.scss';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoData = [
  {
    img: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'SET AN EVENT',
    author: 'author',
    cols: 4,
    text: '<h2>Orders</h2>',
  },
];

const TablesEventsNew = () => (
  <Container maxWidth='lg'>
    <Typography>
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
        
          <label htmlFor='table'>Table No: </label>
          <input type='number' id='table' placeholder='1-11'></input>
          <label htmlFor='people'>People No: </label>
          <input type='number' id='people' placeholder='1-20'></input>
          <label htmlFor='time'>Time: </label>
          <input type='time' id='time' placeholder='12:00'></input>
          <textarea rows='5' id='comment' placeholder='special needs'></textarea>
   

          <Button variant="outlined" className={styles.buttonSubmit}>
        Submit
          </Button>
        </Paper>
      </div>
    </Typography>
  </Container>

);

export default TablesEventsNew;