import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, url, name) {
  return { id, url, name };
}

const rows = [
  createData(0, 'Link', 'Project'),
  createData(1, 'Link', 'Project'),
  createData(2, 'Link', 'Project'),
  createData(3, 'Link', 'Project'),
  createData(4, 'Link', 'Project'),
  createData(5, 'Link', 'Project')
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Projects</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell width="20%"> Link</TableCell>
            <TableCell width="80%"> Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}> </div>
    </React.Fragment>
  );
}