const db = require('./db');

const Accesories = {
  
  getAll: async () => {
    const query = 'SELECT * FROM accessories';
    return db.query(query);
  },
  getById: async (id) => {
    const query = 'SELECT * FROM accessories WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Accesories;
