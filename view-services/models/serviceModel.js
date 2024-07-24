const db = require('./db');

const Service = {
  getAll: async () => {
    const query = 'SELECT * FROM services';
    return db.query(query);
  }
};

module.exports = Service;
