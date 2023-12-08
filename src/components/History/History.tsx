import React from 'react';
import { Paper } from '@material-ui/core';
import { HistoryList } from '../HistoryList/HistoryList';

import './History.scss';

export const History = () => {
  return (
    <Paper 
      style={{
        padding: '0 0 0 20px',
        minWidth: '247px'
      }}
      elevation={3}
    >
      <h3>Історія</h3>
      <HistoryList />
    </Paper>
  );
}