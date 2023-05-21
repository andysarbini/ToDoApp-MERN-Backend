const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/todoroute');

// require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected To MongoDB..`))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));

