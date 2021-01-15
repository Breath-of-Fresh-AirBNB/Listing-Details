const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/listings', (req, res) => {
  models.getAllListings((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
