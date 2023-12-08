import React, { useState } from 'react';
import { Paper, Container, Button, TextField } from '@material-ui/core';
import { History } from './components/History/History';
// Перенести усі стилі до відповідних scss файлів

export const App = () => {
  const [query, setQuery] = useState('');

  const storedTtns = localStorage.getItem('ttns');
  const parsedTtns: string[] = storedTtns ? JSON.parse(storedTtns) : [];

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim() !== '') {
      parsedTtns.push(query);
      localStorage.setItem('ttns', JSON.stringify(parsedTtns));
    }

    setQuery('');
  };
  return (
    <Container 
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        style={{ 
          maxWidth: '800px',
          padding: '30px' 
        }}
      >
        <Container style={{ marginBottom: '30px' }}>
          <Button variant="outlined" style={{ marginRight: '20px'}}>
            Перевірити ТТН
          </Button>
          <Button variant="outlined">
            Список відділень
          </Button>
        </Container>
        <Container style={{marginBottom: '40px'}}>
          <form 
            style={{display: 'flex', alignItems: 'center'}}
            onSubmit={submitHandler}
          >
            <TextField 
              id="outlined-basic" 
              label="Your TTN number" 
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ marginRight: '100px', minWidth: '250px' }}
            />
            <Button 
              variant="contained"
              onClick={submitHandler}
            >
              Get status TTN
            </Button>
          </form>
        </Container>
        <Container 
          style={{
            display: 'flex',
          }}
        >
          {/* Цей контейнер знизу можна винести як окремий компонент <ItemInfo /> */}
          <Paper 
            style={{
              padding: '0 10px',
              marginRight: '30px'
            }}
            elevation={3}
          >
            <p>Статус доставки: Одержано</p>
            <p>
              <strong>Відправлено: </strong>Відділення №17 (до 30 кг): вул. Розумовська, 29
            </p>
            <p>
              <strong>Отримано: </strong>Відділення №13 (до 30 кг): просп. Гагаріна, 43
            </p>
          </Paper>
          <History />
        </Container>
      </Paper>
    </Container>
  );
};
