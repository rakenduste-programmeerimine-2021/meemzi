const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const jwtAuth = require("./middleware/jwtAuth");
require("dotenv").config();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
};

const authRoutes = require('./routes/auth');
const exerciseRoutes = require('./routes/exercises')

const app = express()
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);
app.use('/api/exercise', exerciseRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })