const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  // Triggering another build
  res.send('this is version 2 after successful run');
  res.send('you done it');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});