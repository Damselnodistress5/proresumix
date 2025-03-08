const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const resumeRoutes = require('./routes/resumeRoutes');
const config = require('./config');

const app = express();

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use('/api/resume', resumeRoutes);

app.get('/', (req, res) => {
  res.send('AI-powered Conversational Resume Assistant API');
});

module.exports = app;