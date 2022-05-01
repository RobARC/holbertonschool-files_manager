const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (error) => console.log(error.message));
    this.client.connect();
  }

  isAlive() {
    const connect = redis.createClient().connect;
    if (!connect) {
      return false;
    }
    return true;
  }

  async get(key) {
    const getval = promisify(this.client.get).bind(this.client);
    const val = await getval(key);
    return val;
  }

  async set(key, val, duration) {
    await this.client.set(key, val);
    await this.client.expire(key, duration);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
