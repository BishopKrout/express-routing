const express = require('express');
const app = express();
const { mean, median, mode } = require('./operations');

function validateNumsArray(req, res, next) {
  const numsAsStrings = req.query.nums.split(',');
  
  for (let i = 0; i < numsAsStrings.length; i++) {
    let num = Number(numsAsStrings[i]);
    if (Number.isNaN(num)) {
      return res.status(400).json({ error: `Invalid number: ${numsAsStrings[i]}` });
    } else {
      numsAsStrings[i] = num;
    }
  }
  req.nums = numsAsStrings;
  next();
}

app.get('/mean', validateNumsArray, (req, res, next) => {
  const value = mean(req.nums);
  return res.json({ operation: "mean", value });
});

app.get('/median', validateNumsArray, (req, res, next) => {
  const value = median(req.nums);
  return res.json({ operation: "median", value });
});

app.get('/mode', validateNumsArray, (req, res, next) => {
  const value = mode(req.nums);
  return res.json({ operation: "mode", value });
});

module.exports = app;
