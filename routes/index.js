const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController');

// app Routes

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

module.exports = router;
