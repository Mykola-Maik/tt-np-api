import React from 'react';

import './HistoryListItem.scss';

interface Props {
  history: string[];
}

export const HistoryListItem: React.FC<Props> = ({history}) => {
  return (
    <>
      {history && history.map(ttn => (
        <li style={{ marginBottom: '20px' }}>
          <strong>{ttn}</strong>
        </li>
      ))}
    </>
  );
}