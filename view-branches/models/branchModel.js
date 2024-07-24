const db = require('./db');

const Branch = {
  getAll: async () => {
    const query = 'SELECT * FROM branches';
    return db.query(query);
  }
};

module.exports = Branch;
