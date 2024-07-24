const db = require('./db');

const Medicine = {
  getAll: async () => {
    const query = 'SELECT * FROM medicines';
    return db.query(query);
  }
};

module.exports = Medicine;
