import React from 'react';
import { HistoryListItem } from '../HistoryListItem/HistoryListItem';

import './HistoryList.scss';

export const HistoryList = () => {
  const storedTtns: string[] = JSON.parse(localStorage.getItem('ttns') || '[]');

  return (
    <ul 
      style={{ 
        overflow: 'auto', 
        maxHeight: '150px',
        paddingRight: '80px'
      }}
    >
      <HistoryListItem history={storedTtns} />
    </ul>
  );
}