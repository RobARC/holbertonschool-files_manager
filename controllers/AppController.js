const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');


function getStatus(req, res) {
    if (redisClient.isAlive() && dbClient.isAlive()) {
      res.status(200).json({ "redis": true, "db": true }, 200);
    }
  }

async function getStats(req, res) {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    const obj = {
      users,
      files,
    };
    res.status(200).json(obj);
  }


module.exports = {getStatus, getStats};
