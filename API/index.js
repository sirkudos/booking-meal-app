const express = require('express'),
  routes = require('./route');
  app = express(),
  port = '3000';

app.use(routes);
app.listen(port, () => {
    console.log(`started app on ${port}`);
});