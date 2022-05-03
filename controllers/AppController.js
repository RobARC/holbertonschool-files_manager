const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  static getStatus(req, res) {
    const data = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).send(data)
  }

  static async getStats(req, res) {
    const data = {
       users: await dbClient.nbUsers(),
       files: await dbClient.nbFiles(),
    };
    return res.status(200).send(data);
  }
}

module.exports = AppController;
