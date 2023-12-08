import React from 'react';
import { Paper, Container, Button, TextField } from '@material-ui/core';
// Перенести усі стилі до відповідних scss файлів

export const App = () => {
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
        <Container style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <TextField 
            id="outlined-basic" 
            label="Your TTN number" 
            variant="outlined"
            style={{ marginRight: '100px', minWidth: '250px' }}
          />
          <Button variant="contained">
            Get status TTN
          </Button>
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
          <Paper 
            style={{
              padding: '0 0 0 20px'
            }}
            elevation={3}
          >
            <h3>Історія</h3>
            {/* Можна винести у окреми компонет <List /> */}
            <ul 
              style={{ 
                overflow: 'auto', 
                maxHeight: '150px',
                paddingRight: '80px'
              }}
            >
              {/* Можна винести у окреми компонент <ListItem /> */}
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799002</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799003</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799004</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799005</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799002</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799003</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799004</strong>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>20400048799005</strong>
              </li>
            </ul>
          </Paper>
        </Container>
      </Paper>
    </Container>
  );
};
