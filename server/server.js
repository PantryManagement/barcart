// const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const universeRouter = require('./routes/universe');
const drinksRouter = require('./routes/drinks');

app.use(express.json());
app.use('/api/universe', universeRouter);
app.use('/api/drinks', drinksRouter);

// serve static files
app.use(express.static(path.resolve(__dirname)));

app.get('/build.js', (req, res) => {
  console.log('here in sendfile /build')
  return res.sendFile(path.resolve(__dirname, '../build/build.js'));
});


// no favicon implement, just added to end an annoying error.
app.get('/favicon.ico', (req, res) => (
  res.status(200)
));

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;