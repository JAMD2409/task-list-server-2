const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  {
    id: '123456',
    isCompleted: true,
    description: 'Despertar',
  },
  {
    id: '1234567',
    isCompleted: true,
    description: 'Tender la cama',
  },
  {
    id: '12345678',
    isCompleted: false,
    description: 'Desayunar',
  },

];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});