const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRouts = require('./routes/authRouts');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT;

module.exports.Connection = mongoose.connect(
  'mongodb://localhost/League',
  () => {
    console.log('connected');
  },
  (err) => console.log(err.message)
);

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(authRouts);

app.listen(PORT, () => {
  console.log(`server slusa na portu ${PORT}`);
});
