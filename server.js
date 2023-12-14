const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Include route handlers
const calendarRoutes = require('./routes/calendarRoutes');
const liftsRoutes = require('./routes/liftsRoutes');
const profileRoutes = require('./routes/profileRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

app.use('/calendar', calendarRoutes);
app.use('/lifts', liftsRoutes);
app.use('/profile', profileRoutes);
app.use('/workout', workoutRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
