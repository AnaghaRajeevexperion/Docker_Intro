const express = require('express');
const app = express();
const port = 3000;

// Define your API endpoints here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
