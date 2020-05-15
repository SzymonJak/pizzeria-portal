import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
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
];



const TablesEventsId = ({ match }) => (
  <div className={styles.component}>
    <h3>Existing event with ID: {match.params.id}</h3>
    <Button variant='outlined' className={styles.buttonSubmit}>
      <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Go Back</Link>
    </Button>
    <Container maxWidth='lg'>
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
    </Container>
  </div>
);

TablesEventsId.propTypes = {
  match: PropTypes.object,
};

export default TablesEventsId;