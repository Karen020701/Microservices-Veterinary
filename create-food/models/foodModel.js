const db = require('./db');

const Food = {
  create: async (data) => {
    const { descrip, type, price, quantity } = data;
    const query = `
      INSERT INTO pet_food (descrip, type, price, quantity) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [descrip, type, price, quantity];
    return db.query(query, values);
  },

    delete: async (id) => {
      const query = 'DELETE FROM pet_food WHERE id = $1';
      const values = [id];
      return db.query(query, values);
      }
  };

module.exports = Food;