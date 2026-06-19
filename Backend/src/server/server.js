const express =require('express');
const cors =require('cors');
const {startReminderService} = require('../tools/tools');

const app=express();
app.use(express.json());
app.use(cors());

startReminderService();


module.exports = app;