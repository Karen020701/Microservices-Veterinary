const db = require('./db');

const Toys = {
  
  getAll: async () => {
    const query = 'SELECT * FROM toys';
    return db.query(query);
  },
  getById: async (id) => {
    const query = 'SELECT * FROM toys WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Toys;
