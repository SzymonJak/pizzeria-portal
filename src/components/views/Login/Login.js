import React from 'react';
import styles from './Login.module.scss';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoData = [
  {
    img: 'https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'LOGIN',
    author: 'author',
    cols: 4,
  },
];

const Login = () => (
  <Container maxWidth='lg'>
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
        <div>
          <Typography>
            <label htmlFor='login'>Login: </label>
            <input type='email' id='login' placeholder='example@host.xx'></input>
          </Typography>
        </div>
        <div>
          <Typography>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' placeholder='password'></input>
          </Typography>
        </div>
        <Button variant="outlined" className={styles.buttonSubmit}>
        Submit
        </Button>
      </Paper>
    </div>
  </Container>

);

export default Login;