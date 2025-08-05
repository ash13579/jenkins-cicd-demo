const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('this is version 2 after successful run');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});