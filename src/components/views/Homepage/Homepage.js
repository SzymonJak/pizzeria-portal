import React from 'react';
import styles from './Homepage.module.scss';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const tileData = [
  {
    img: 'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'ORDERS',
    author: 'author',
    cols: 4,
    text: '<h2>Orders</h2>',
    header: ['Type', 'Order', 'Deliver'],
    data: [
      {id: '1', type: 'Local', order: 6, deliver: 4},
      {id: '2', type: 'Online', order: 6, deliver: 4},
    ],
  },
  {
    img: 'https://images.pexels.com/photos/1735658/pexels-photo-1735658.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'EVENTS',
    author: 'author',
    cols: 4,
    text: '<h2>Orders</h2>',
    header: ['Table', 'Time', 'People'],
    data: [
      {id: '1', type: '3', order: '12:00', deliver: 14},
      {id: '2', type: '5', order: '15:00', deliver: 10},
    ],
  },
  {
    img: 'https://images.pexels.com/photos/3820994/pexels-photo-3820994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: 'RESERVATIONS',
    author: 'author',
    cols: 4,
    text: '<h2>Orders</h2>',
    header: ['Table', 'Time', 'People'],
    data: [
      {id: '1', type: '1', order: '15:00', deliver: 3},
      {id: '2', type: '7', order: '19:00', deliver: 2},
      {id: '2', type: '6', order: '20:00', deliver: 2},
    ],
  },
];

const Homepage = () => (
  // const classes = useStyles();
  
  <Container maxWidth='lg'>
    <div className={styles.root}>
      {tileData.map((tile, i) => (

        <Paper key={i} className={styles.component}>
          <GridList cellHeight={80} className={styles.gridList} cols={4}>
          
            <GridListTile key={i} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title}/>
            </GridListTile>
          
          </GridList>
    
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{tile.header[0]}</TableCell>
                <TableCell>{tile.header[1]}</TableCell>
                <TableCell>{tile.header[2]}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tile.data.map((item, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {item.type}
                  </TableCell>
                  <TableCell>
                    {item.order}
                  </TableCell>
                  <TableCell>
                    {item.deliver}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        
        </Paper>
      ))}
    </div>
  </Container>
);

export default Homepage;