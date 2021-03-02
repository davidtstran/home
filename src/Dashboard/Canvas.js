import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import Typography from '@material-ui/core/Typography';

export default function Canvas() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Canvas</Title>
    </React.Fragment>
  );
}