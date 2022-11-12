const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: keys.redirectDomain,
}));

require('./routes/')(app);

app.listen(keys.port, () => {
    console.log(`Running on port ${keys.port}`);
});