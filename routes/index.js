const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController');

// app Routes

router.get('/status',(req, res) => AppController.getStatus(req, res));
router.get('/stats',(req, res) =>AppController.getStats(req, res));

module.exports = router;
