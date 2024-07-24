const db = require('./db');

const Food = {
  
  getAll: async () => {
    const query = 'SELECT * FROM pet_food';
    return db.query(query);
  },
  getById: async (id) => {
    const query = 'SELECT * FROM pet_food WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Food;
