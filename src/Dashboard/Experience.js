import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import Typography from '@material-ui/core/Typography';

export default function Experience() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Experience</Title>
        <Typography component="p" variant="h4">
          David Tran
        </Typography>
        <Typography component="p" variant="h5">
          Software Engineer 
        </Typography>
        <Typography component="p" variant="h6">
          Federal Reserve Bank of Kansas City (January 2020 - Present)
        </Typography>
    </React.Fragment>
  );
}