require('dotenv').config()

const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/api', apiRoutes(express.Router()));

const env = process.env.NODE_ENV;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`APP RUN ON PORT ${port} WIH ENV ${env}`);
});