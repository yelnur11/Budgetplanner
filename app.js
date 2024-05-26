const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/budget', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api/accounts', require('./backend/API/routes/accountRoutes'));
app.use('/api/alerts', require('./backend/API/routes/alertRoutes'));
app.use('/api/budgets', require('./backend/API/routes/budgetRoutes'));
app.use('/api/transactions', require('./backend/API/routes/transactionRoutes'));
app.use('/api/tips', require('./backend/API/routes/tipsRoutes'));
app.use('/api/users', require('./backend/API/routes/userRoutes'));

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});