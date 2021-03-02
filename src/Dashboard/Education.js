import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Education() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Education</Title>
      <Typography component="p" variant="h5">
        University of Illinois at Urbana-Champaign
      </Typography>
      <Typography component="p" variant="h6">
        Master of Computer Science (2021)
      </Typography>
      <Typography component="p" variant="h5">
        University of Missouri - Kansas City
      </Typography>
      <Typography component="p" variant="h6">
        Bachelor of Science in Computer Science (2019)
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}> </Typography>
    </React.Fragment>
  );
}