import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

import Container from '@material-ui/core/Container';
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

const TablesBookingId = ({ match }) => (
  <div className={styles.component}>
    <h3>Existing booking with ID: {match.params.id}</h3>
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
  </div>
);

TablesBookingId.propTypes = {
  match: PropTypes.object,
};

export default TablesBookingId;