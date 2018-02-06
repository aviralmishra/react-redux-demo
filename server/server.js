import express from 'express';
import config from './config';
import {rows} from './data.json';
const cors = require('cors');

const app = express().use(cors());

app.get('/data', (req, res) => {
  res.status(200).json(rows);
});

app.get('/data/:id', (req, res) => {
  res.status(200).json(rows.find((row) => req.params.id == row.id));
});

app.listen(config.port, () => {
  console.info(`Listening on port ${config.port}`);
});
