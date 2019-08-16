const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 1000

app.set('port', port);

const mLabPath = "mongodb://" + process.env.MONGO_USERNAME.toString() + ":" + process.env.MONGO_PASSWORD.toString() + "@" + process.env.MLAB_SERVER.toString() + ".mlab.com:" + process.env.MLAB_PORT_AND_DB.toString();
mongoose.connect(mLabPath, { useNewUrlParser: true });
mongoose.connection
  .once('open', () => {
    console.log('mongoose connection is good to go')
  })
  .on('error', (error) => {
    console.log('this is the warning to the warning!');
    console.warn('Warning', error);
  });


app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

routes(app);

app.listen(port, () => {
  console.log("API SERVER");
  console.log(`Running on port ${port}`);
  console.log("Enter Ctrl + C to stop");
});
