const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send('success');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports.app = app;