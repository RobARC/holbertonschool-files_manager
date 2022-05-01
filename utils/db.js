const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}`;

    this.client = null;
    // Creating a connection to mongodb, saving dabase client to this.client
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
      if (err) this.client = false;
      else {
        this.client = db.db(database);
        this.client.createCollection('users');
        this.client.createCollection('files');
      }
    });
  }

  /** isAlive - returns true if connection to MongoDB is successful otherwise, false */
  isAlive() {
    return !!this.client; // this.client ? true : false;
  }

  /** nbUsers - returns the number of documents in the collection users */
  async nbUsers() {
    const numDocs = await this.client.collection('users').estimatedDocumentCount({});
    return numDocs;
  }

  /** nbFiles - returns the number of documents in the collection files */
  async nbFiles() {
    const numDocs = await this.client.collection('files').estimatedDocumentCount({});
    return numDocs;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
