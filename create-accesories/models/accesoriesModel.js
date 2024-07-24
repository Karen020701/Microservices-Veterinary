const db = require('./db');

const Accesories = {
  create: async (data) => {
    const { name, type, price, quantity } = data;
    const query = `
      INSERT INTO accessories (name, type, price, quantity) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [name, type, price, quantity];
    return db.query(query, values);
  },
  delete: async (id) => {
    const query = 'DELETE FROM accessories WHERE id = $1';
    const values = [id];
    return db.query(query, values);
    }
};

module.exports = Accesories;