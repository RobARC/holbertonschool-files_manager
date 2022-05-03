const express = require('express');
const router = require('./routes/index')

// Initializer
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Routes
app.use(express.json());
app.use(router);

// starting server

app.listen(app.get('port', () => {
  console.log('Server running on port', app.get('port'));
}));

export default app;