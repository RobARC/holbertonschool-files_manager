const express = require('express');

// Initializer
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// starting server

app.listen(app.get('port', () => {
  console.log('Server running on port', app.get('port'));
}));
