'use strict';
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());

app.get('/', (req, res) =>{
  res.send('<h1>Hello</h1>');
});


module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`server up on ${PORT}`));
  },
};
