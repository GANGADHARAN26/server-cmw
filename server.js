const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "" )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const jobRoutes = require('./routes/jobRoutes');
app.use('/api/jobs', jobRoutes);

app.use((err, req, res, next) => {
  console.log(req.body); 
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT =  10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 