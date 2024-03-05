// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Define the port to run the server on
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Route for the root path to directly serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// Additional route to serve the index.html file at /node/255
app.get('/node/255', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
