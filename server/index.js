const express = require('express');
require('dotenv').config({ path: './local.env' });
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const errorController = require('./controllers/errorController');
const Team = require('./models/teamModel');
const routesFactory = require('./routes/routesFactory');
const authRoutes = require('./routes/authRoutes');
const Player = require('./models/playerModel');
const League = require('./models/leagueModel');
const Season = require('./models/seasonModel');

const app = express();
const PORT = process.env.PORT;

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION. Shutting down...');
  server.close(() => process.exit(1));
});

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(
  db,
  () => {
    console.log('Connected');
  },
  (err) => console.log(err.message)
);

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/users', authRoutes);
app.use('/api/v1/teams', routesFactory(Team));
app.use('/api/v1/players', routesFactory(Player));
app.use('/api/v1/leagues', routesFactory(League));
app.use('/api/v1/seasons', routesFactory(Season));
app.all('*', (req, res, next) => {
  console.log('aaa');
  next(new AppError(`Route ${req.originalUrl} is not defined!`, 404));
});

app.use(errorController);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
