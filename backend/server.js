const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const cryptoRoutes = require('./routes/cryptoRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/crypto', cryptoRoutes);

module.exports = app; // for testing
