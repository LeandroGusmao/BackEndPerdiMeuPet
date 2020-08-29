const express = require('express');
const app = express();

const routeUsers = require('./routes/users');
const routeAnnouncements = require('./routes/announcements');

app.use('/users', routeUsers);
app.use('/announcements', routeAnnouncements);


module.exports = app;