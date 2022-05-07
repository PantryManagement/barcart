// const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const universeRouter = require('./routes/universe');

app.use(express.json());

// serve static files
// app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, res) => {
  console.log('here in sendfile html')
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

// app.get('/build.js', (req, res) => {
//   console.log('here in sendfile /build')
//   return res.sendFile(path.resolve(__dirname, '../build/build.js'));
// });

app.use('/universe', universeRouter);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;