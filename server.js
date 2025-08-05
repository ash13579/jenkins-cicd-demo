const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from our Simple CI/CD Pipeline! by ASH');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});